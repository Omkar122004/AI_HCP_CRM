from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from app.database.database import (
    Base,
    engine
)

from app.api.chat import (
    router as chat_router
)

Base.metadata.create_all(
    bind=engine
)

app = FastAPI(
    title="AI HCP CRM"
)

app.add_middleware(

    CORSMiddleware,

    allow_origins=[

        "http://localhost:5173",

        "http://127.0.0.1:5173"

    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"]

)

app.include_router(chat_router)


@app.get("/")
def home():

    return {

        "message":
        "AI HCP CRM Running"

    }