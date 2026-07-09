"""
Log Interaction Tool
"""

from app.graph.state import CRMState
from app.database.database import SessionLocal

from app.services.hcp_service import (
    get_hcp_by_name,
    create_hcp,
)

from app.services.interaction_service import (
    create_interaction,
)


def log_interaction(state: CRMState):

    db = SessionLocal()

    try:

        data = state["extracted_data"]

        doctor_name = data.get("doctor_name")

        hcp = get_hcp_by_name(
            db,
            doctor_name
        )

        if hcp is None:

            hcp = create_hcp(
                db,
                data
            )

        interaction = create_interaction(
            db,
            hcp.id,
            data
        )

        state["tool_result"] = {

            "status": "success",

            "hcp_id": hcp.id,

            "interaction_id": interaction.id,

            "message": "Interaction Logged Successfully"

        }

        state["extracted_data"]["interaction_id"] = interaction.id

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