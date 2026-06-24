from pydantic_settings import BaseSettings
from functools import lru_cache


class Settings(BaseSettings):
    app_name: str = "Orbit API"
    debug: bool = False

    # Neon
    database_url: str = "postgresql+asyncpg://user:pass@localhost:5432/orbit"

    # Groq
    groq_api_key: str = ""
    groq_model: str = "llama-3.3-70b-versatile"


    # JWT
    jwt_secret: str = "change-me-in-production"
    jwt_algorithm: str = "HS256"
    jwt_expire_minutes: int = 60

    # CORS
    frontend_url: str = "http://localhost:3000"

    model_config = {"env_file": "../.env.local", "extra": "ignore"}


@lru_cache
def get_settings() -> Settings:
    return Settings()