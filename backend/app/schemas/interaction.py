from pydantic import BaseModel


class InteractionRequest(BaseModel):

    hcpName: str

    interactionType: str

    meetingDate: str

    meetingTime: str

    attendees: str

    discussion: str

    materials: str

    samples: str

    sentiment: str

    outcomes: str

    followUp: str