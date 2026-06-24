import logging
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select
from pydantic import BaseModel
from app.db.database import get_db
from app.db.models import SiteContent, User
from app.core.auth import get_current_user

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/api/site-content", tags=["site_content"])


class SiteContentUpdate(BaseModel):
    content: dict


@router.get("")
async def get_site_content(page: str | None = None, db: AsyncSession = Depends(get_db)):
    query = select(SiteContent)
    if page:
        query = query.where(SiteContent.page == page)
    result = await db.execute(query)
    rows = result.scalars().all()
    return [
        {
            "id": str(r.id),
            "page": r.page,
            "section": r.section,
            "content": r.content,
        }
        for r in rows
    ]


@router.put("/{id}")
async def update_site_content(
    id: str,
    body: SiteContentUpdate,
    db: AsyncSession = Depends(get_db),
    user: User = Depends(get_current_user),
):
    result = await db.execute(select(SiteContent).where(SiteContent.id == id))
    row = result.scalar_one_or_none()
    if not row:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Content not found")
    row.content = body.content
    await db.commit()
    return {"id": id}
