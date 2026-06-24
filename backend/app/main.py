
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import get_settings
from app.api import auth, contacts, bookings, quotes, site_content

settings = get_settings()


@asynccontextmanager
async def lifespan(app: FastAPI):
    from app.db.models import Base
    from app.db.database import engine
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    await engine.dispose()


app = FastAPI(
    title=settings.app_name,
    version="0.1.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        settings.frontend_url,
        "http://localhost:3000",
        "http://localhost:3001",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:3001",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(contacts.router)
app.include_router(bookings.router)
app.include_router(quotes.router)
app.include_router(site_content.router)


@app.get("/api/health")
async def health():
    return {"status": "ok", "model": settings.groq_model, "provider": "groq"}