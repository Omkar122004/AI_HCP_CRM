"""
Summarize Interaction Tool
"""

from app.database.database import SessionLocal
from app.models.interaction import Interaction
from app.llm.groq_client import llm


def summarize_interaction(state):

    db = SessionLocal()

    try:

        doctor = state["extracted_data"]["doctor_name"]

        interactions = (

            db.query(Interaction)

            .all()

        )

        history = "\n".join(

            [
                i.discussion or ""

                for i in interactions

            ]

        )

        prompt = f"""

Summarize these CRM interactions.

{history}

"""

        summary = llm.invoke(prompt)

        state["tool_result"] = {

            "status": "success",

            "summary": summary.content

        }

        return state

    finally:

        db.close()