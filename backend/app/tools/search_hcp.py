"""
Search HCP Tool
"""

from app.database.database import SessionLocal
from app.models.hcp import HCP


def search_hcp(state):

    db = SessionLocal()

    try:

        doctor = (

            db.query(HCP)

            .filter(
                HCP.name.ilike(
                    f"%{state['extracted_data']['doctor_name']}%"
                )
            )

            .all()

        )

        state["tool_result"] = {

            "status": "success",

            "results": [

                {
                    "id": h.id,
                    "name": h.name,
                    "hospital": h.hospital,
                    "specialization": h.specialization
                }

                for h in doctor

            ]

        }

        return state

    finally:

        db.close()