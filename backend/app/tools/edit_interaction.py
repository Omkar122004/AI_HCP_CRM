"""
Edit Interaction Tool
"""

from app.database.database import SessionLocal
from app.models.interaction import Interaction


def edit_interaction(state):

    db = SessionLocal()

    try:

        data = state["extracted_data"]

        interaction = (

            db.query(Interaction)

            .filter(
                Interaction.id == data.get("interaction_id")
            )

            .first()

        )

        if interaction is None:

            state["tool_result"] = {

                "status": "error",

                "message": "Interaction not found"

            }

            return state

        editable_fields = [

            "interaction_type",
            "meeting_date",
            "meeting_time",
            "attendees",
            "discussion",
            "materials",
            "samples",
            "summary",
            "sentiment",
            "outcome",
            "follow_up_date"

        ]

        for field in editable_fields:

            value = data.get(field)

            if value not in (None, ""):

                setattr(
                    interaction,
                    field,
                    value
                )

        db.commit()

        db.refresh(interaction)

        state["tool_result"] = {

            "status": "success",

            "message": "Interaction Updated"

        }

        return state

    except Exception as e:

        db.rollback()

        state["tool_result"] = {

            "status": "error",

            "message": str(e)

        }

        return state

    finally:

        db.close()