import asyncio
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from sqlalchemy import text
from src.common.config import settings

async def inject():
    engine = create_async_engine(settings.DATABASE_URL)
    async_session = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)
    async with async_session() as session:
        result = await session.execute(text("SELECT id FROM users WHERE role = 'DOCTOR'"))
        doctor_ids = result.scalars().all()
        for doctor_id in doctor_ids:
            # Delete old slots for simplicity
            await session.execute(text("DELETE FROM availability_slots WHERE doctor_id = :doc_id"), {"doc_id": doctor_id})
            # Insert a valid slot
            await session.execute(text("""
                INSERT INTO availability_slots 
                (id, doctor_id, start_time, end_time, is_booked, status, created_at, updated_at) 
                VALUES 
                (gen_random_uuid(), :doc_id, '2026-07-20T09:00:00Z', '2026-07-20T10:00:00Z', false, 'AVAILABLE', now(), now())
            """), {"doc_id": doctor_id})
            print("Slot created for doctor", doctor_id)
        await session.commit()

asyncio.run(inject())
