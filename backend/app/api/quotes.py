import logging
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel
from app.db.database import get_db
from app.db.models import Quote
from app.core.auth import get_current_user
from app.db.models import User

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/quotes", tags=["quotes"])


class QuoteCreate(BaseModel):
    config: dict = {}


@router.post("", status_code=status.HTTP_201_CREATED)
async def create_quote(
    body: QuoteCreate,
    db: AsyncSession = Depends(get_db),
    user: User = Depends(get_current_user),
):
    quote = Quote(user_id=user.id, config=body.config)
    db.add(quote)
    await db.commit()
    await db.refresh(quote)
    return {"id": str(quote.id)}