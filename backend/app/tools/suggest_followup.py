"""
Suggest Follow-up Tool
"""

from app.database.database import SessionLocal
from app.models.interaction import Interaction
from app.llm.groq_client import llm


def suggest_followup(state):

    db = SessionLocal()

    try:

        interactions = db.query(
            Interaction
        ).all()

        history = "\n".join(

            [
                i.discussion or ""

                for i in interactions

            ]

        )

        prompt = f"""

You are an experienced pharmaceutical CRM assistant.

Based on these interactions,

suggest the next follow-up.

{history}

"""

        response = llm.invoke(prompt)

        state["tool_result"] = {

            "status": "success",

            "followup": response.content

        }

        return state

    finally:

        db.close()