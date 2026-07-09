from sqlalchemy.orm import Session

from app.models.hcp import HCP


def get_hcp_by_name(db: Session, name: str):

    return (
        db.query(HCP)
        .filter(HCP.name == name)
        .first()
    )


def create_hcp(db: Session, data: dict):

    hcp = HCP(

        name=data.get("doctor_name"),

        specialization=data.get("specialization"),

        hospital=data.get("hospital"),

        city=data.get("city"),

        email=data.get("email"),

        phone=data.get("phone"),

    )

    db.add(hcp)

    db.commit()

    db.refresh(hcp)

    return hcp