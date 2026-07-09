"""
Application Configuration

Loads environment variables from the .env file.
"""

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # Application
    APP_NAME: str = "AI First CRM"
    APP_VERSION: str = "1.0.0"

    # Database
    DATABASE_URL: str

    # Groq API
    GROQ_API_KEY: str

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


settings = Settings()