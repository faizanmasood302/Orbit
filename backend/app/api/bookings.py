import logging
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel
from app.db.database import get_db
from app.db.models import Booking
from app.core.auth import get_current_user
from app.db.models import User

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/bookings", tags=["bookings"])


class BookingCreate(BaseModel):
    contact_id: str | None = None
    scheduled_at: str
    duration_mins: int = 30
    notes: str | None = None


@router.post("", status_code=status.HTTP_201_CREATED)
async def create_booking(
    body: BookingCreate,
    db: AsyncSession = Depends(get_db),
    user: User = Depends(get_current_user),
):
    booking = Booking(
        user_id=user.id,
        scheduled_at=body.scheduled_at,
        duration_mins=body.duration_mins,
        notes=body.notes,
    )
    db.add(booking)
    await db.commit()
    await db.refresh(booking)
    return {"id": str(booking.id)}