from app.tools.log_interaction import log_interaction
from app.tools.edit_interaction import edit_interaction
from app.tools.search_hcp import search_hcp
from app.tools.summarize_interaction import summarize_interaction
from app.tools.suggest_followup import suggest_followup

TOOLS = [

    log_interaction,

    edit_interaction,

    search_hcp,

    summarize_interaction,

    suggest_followup,

]