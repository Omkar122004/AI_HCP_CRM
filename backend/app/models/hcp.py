"""
HCP Model
Stores Healthcare Professional information.
"""

from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.database.database import Base


class HCP(Base):
    __tablename__ = "hcps"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String(150), nullable=False)

    specialization = Column(String(100))

    hospital = Column(String(150))

    city = Column(String(100))

    email = Column(String(150))

    phone = Column(String(20))

    interactions = relationship(
        "Interaction",
        back_populates="hcp",
        cascade="all, delete"
    )