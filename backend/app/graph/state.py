"""
Shared state used by the LangGraph workflow.
"""

from typing import TypedDict, Optional


class CRMState(TypedDict):
    # User input
    user_input: str

    # Intent detected by the LLM
    intent: Optional[str]

    # Structured information extracted from the message
    extracted_data: Optional[dict]

    # Result returned by a tool
    tool_result: Optional[dict]

    # Final response to the frontend
    response: Optional[str]