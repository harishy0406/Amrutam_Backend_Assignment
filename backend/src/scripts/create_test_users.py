import asyncio
import sys
import os

sys.path.append(os.getcwd())

from src.core.database import AsyncSessionLocal
from src.modules.auth.models import User, Profile, UserRole
from src.common.utils import get_password_hash

async def create_users():
    async with AsyncSessionLocal() as db:
        from sqlalchemy.future import select

        users = [
            ("admin@amrutam.com", UserRole.ADMIN, "Super Admin"),
            ("doctor@amrutam.com", UserRole.DOCTOR, "Dr. Smith"),
            ("patient@amrutam.com", UserRole.PATIENT, "John Patient"),
        ]

        for email, role, name in users:
            stmt = select(User).where(User.email == email)
            result = await db.execute(stmt)
            if result.scalars().first():
                print(f"User {email} already exists")
                continue
            
            new_user = User(
                email=email,
                password_hash=get_password_hash("password123"),
                role=role,
                is_active=True,
                is_verified=True
            )
            db.add(new_user)
            await db.commit()
            await db.refresh(new_user)

            new_profile = Profile(
                user_id=new_user.id,
                full_name=name,
                phone_number="0000000000"
            )
            db.add(new_profile)
            await db.commit()
            print(f"Created {role.value}: {email}")

if __name__ == "__main__":
    if sys.platform == 'win32':
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    asyncio.run(create_users())
