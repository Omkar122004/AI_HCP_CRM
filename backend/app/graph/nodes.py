"""
LangGraph Nodes
"""

import json
import re

from app.graph.state import CRMState
from app.llm.groq_client import llm


def understand_request(state: CRMState):

    prompt = f"""
You are an AI CRM Assistant.

Your job is to classify the user's request into EXACTLY ONE intent and extract the relevant fields.

Return ONLY valid JSON.
Do NOT return markdown.
Do NOT return explanations.

JSON Format:

{{
    "intent":"",
    "doctor_name":"",
    "hospital":"",
    "interaction_type":"",
    "meeting_date":"",
    "meeting_time":"",
    "attendees":"",
    "discussion":"",
    "materials":"",
    "samples":"",
    "sentiment":"",
    "outcomes":"",
    "follow_up_date":""
}}

The intent MUST be one of these values ONLY:

- log_interaction
- edit_interaction
- search_hcp
- summarize_interaction
- suggest_followup

Intent Rules:

1. log_interaction
Examples:
- I met Dr. Sharma today.
- Log today's interaction.
- Record my meeting with Dr. Amit.

2. edit_interaction
Examples:
- Update Dr. Sharma's interaction.
- Edit today's meeting.
- Change the sentiment to Positive.

3. search_hcp
Examples:
- Search Dr. Sharma.
- Find Dr. Amit Kumar.
- Show doctor details.

4. summarize_interaction
Examples:
- Summarize interaction with Dr. Sharma.
- Generate meeting summary.
- Show interaction summary.
- Summarize today's interaction.

5. suggest_followup
Examples:
- Suggest follow-up for Dr. Sharma.
- Recommend next action.
- What should I do next?
- Next visit suggestion.

Extraction Rules:

- doctor_name → Full doctor's name.
- hospital → Hospital name.
- interaction_type → Meeting, Call, Email, Conference.
- sentiment → Positive, Neutral, Negative.
- meeting_time → Return ONLY the start time.

User Message:



{state["user_input"]}

"""

    response = llm.invoke(prompt)

    try:

        data = json.loads(response.content)

    except Exception:

        data = {

            "intent": "log_interaction",

            "doctor_name": "",

            "hospital": "",

            "interaction_type": "",

            "meeting_date": "",

            "meeting_time": "",

            "attendees": "",

            "discussion": state["user_input"],

            "materials": "",

            "samples": "",

            "sentiment": "",

            "outcomes": "",

            "follow_up_date": ""

        }

    # ---------------------------------
    # Normalize Interaction Type
    # ---------------------------------

    interaction_map = {

        "meeting": "Meeting",
        "in-person meeting": "Meeting",
        "in person meeting": "Meeting",
        "face to face meeting": "Meeting",

        "call": "Call",
        "phone call": "Call",

        "email": "Email",

        "conference": "Conference",

    }

    data["interaction_type"] = interaction_map.get(

        str(data.get("interaction_type", "")).lower().strip(),

        data.get("interaction_type", "")

    )

    # ---------------------------------
    # Normalize Sentiment
    # ---------------------------------

    sentiment_map = {

        "positive": "Positive",

        "neutral": "Neutral",

        "negative": "Negative",

    }

    data["sentiment"] = sentiment_map.get(

        str(data.get("sentiment", "")).lower().strip(),

        data.get("sentiment", "")

    )

    # ---------------------------------
    # Extract Meeting Time
    # ---------------------------------

    match = re.search(
        r'(\d{1,2}:\d{2}\s*(?:AM|PM))',
        state["user_input"],
        re.IGNORECASE
    )

    if match:
        data["meeting_time"] = match.group(1).upper()


    print("=" * 60)
    print("Detected Intent:", data.get("intent"))
    print("Extracted Data:", data)
    print("=" * 60)

    state["intent"] = data.get(
        "intent",
        "log_interaction"
    )

    state["extracted_data"] = data

    return state