import logging
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel, EmailStr
from app.db.database import get_db
from app.db.models import Contact

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/contacts", tags=["contacts"])


class ContactCreate(BaseModel):
    name: str
    email: str
    message: str | None = None


@router.post("", status_code=status.HTTP_201_CREATED)
async def create_contact(body: ContactCreate, db: AsyncSession = Depends(get_db)):
    contact = Contact(name=body.name, email=body.email, message=body.message)
    db.add(contact)
    await db.commit()
    await db.refresh(contact)
    return {"id": str(contact.id)}