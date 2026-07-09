from fastapi import APIRouter

from app.schemas.chat import ChatRequest

from app.graph.builder import graph

router = APIRouter()


@router.post("/chat")
def chat(request: ChatRequest):

    state = {

        "user_input": request.message

    }

    result = graph.invoke(state)

    return {

        "success": True,

        "tool_result": result.get(
            "tool_result",
            {}
        ),

        "interaction":
        result["extracted_data"]

    }