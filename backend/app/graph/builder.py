from langgraph.graph import StateGraph, END

from app.graph.state import CRMState

from app.graph.nodes import understand_request

from app.tools.log_interaction import log_interaction
from app.tools.edit_interaction import edit_interaction
from app.tools.search_hcp import search_hcp
from app.tools.summarize_interaction import summarize_interaction
from app.tools.suggest_followup import suggest_followup


builder = StateGraph(CRMState)

builder.add_node(
    "understand_request",
    understand_request
)

builder.add_node(
    "log_interaction",
    log_interaction
)

builder.add_node(
    "edit_interaction",
    edit_interaction
)

builder.add_node(
    "search_hcp",
    search_hcp
)

builder.add_node(
    "summarize_interaction",
    summarize_interaction
)

builder.add_node(
    "suggest_followup",
    suggest_followup
)

builder.set_entry_point(
    "understand_request"
)

builder.add_conditional_edges(

    "understand_request",

    lambda state: state["intent"],

    {

        "log_interaction":
        "log_interaction",

        "edit_interaction":
        "edit_interaction",

        "search_hcp":
        "search_hcp",

        "summarize_interaction":
        "summarize_interaction",

        "suggest_followup":
        "suggest_followup",

    }

)

builder.add_edge(
    "log_interaction",
    END
)

builder.add_edge(
    "edit_interaction",
    END
)

builder.add_edge(
    "search_hcp",
    END
)

builder.add_edge(
    "summarize_interaction",
    END
)

builder.add_edge(
    "suggest_followup",
    END
)

graph = builder.compile()