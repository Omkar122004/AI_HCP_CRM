"""
Interaction Model
"""

from sqlalchemy import (
    Column,
    Integer,
    String,
    Text,
    Date,
    Time,
    ForeignKey,
    DateTime
)

from sqlalchemy.orm import relationship

from datetime import datetime

from app.database.database import Base


class Interaction(Base):

    __tablename__ = "interactions"

    id = Column(Integer, primary_key=True, index=True)

    hcp_id = Column(Integer, ForeignKey("hcps.id"))

    interaction_type = Column(String(50))

    meeting_date = Column(Date)

    meeting_time = Column(Time)

    attendees = Column(Text)

    discussion = Column(Text)

    materials = Column(Text)

    samples = Column(Text)

    summary = Column(Text)

    sentiment = Column(String(50))

    outcome = Column(Text)

    follow_up_date = Column(Date)

    created_at = Column(DateTime, default=datetime.utcnow)

    hcp = relationship(
        "HCP",
        back_populates="interactions"
    )