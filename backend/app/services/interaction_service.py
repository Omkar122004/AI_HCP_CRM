from sqlalchemy.orm import Session
from datetime import datetime

from app.models.interaction import Interaction


def create_interaction(db: Session, hcp_id: int, data: dict):

    interaction = Interaction(

        hcp_id=hcp_id,

        interaction_type=data.get("interaction_type"),

        meeting_date=data.get("meeting_date"),

        meeting_time=(
            datetime.strptime(
                data.get("meeting_time"),
                "%I:%M %p"
            ).time()
            if data.get("meeting_time")
            else None
        ),

        attendees=data.get("attendees"),

        discussion=data.get("discussion"),

        materials=data.get("materials"),

        samples=data.get("samples"),

        summary=data.get("summary"),

        sentiment=data.get("sentiment"),

        outcome=data.get("outcomes"),

        follow_up_date=data.get("follow_up_date"),

    )

    db.add(interaction)

    db.commit()

    db.refresh(interaction)

    return interaction