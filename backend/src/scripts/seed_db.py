import asyncio
import sys
import os
import datetime
import uuid

sys.path.append(os.getcwd())

from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from src.core.database import AsyncSessionLocal
from src.modules.auth.models import User, Profile, UserRole, DoctorProfile
from src.modules.availability.models import AvailabilitySlot
from src.modules.bookings.models import Booking
from src.modules.consultations.models import Prescription
from src.common.utils import get_password_hash
from src.common.security import encrypt_data

async def seed():
    async with AsyncSessionLocal() as db:
        print("Starting Database Seed...")

        # 1. ADMIN
        admin_email = "admin@amrutam.com"
        result = await db.execute(select(User).where(User.email == admin_email))
        admin = result.scalars().first()
        if not admin:
            admin = User(email=admin_email, password_hash=get_password_hash("password123"), role=UserRole.ADMIN, is_active=True, is_verified=True)
            db.add(admin)
            await db.commit()
            db.add(Profile(user_id=admin.id, full_name="Super Admin", phone_number="9999999999"))
            await db.commit()
            print(f"Created Admin: {admin_email}")

        # 2. DOCTORS
        doctors_data = [
            ("doctor1@amrutam.com", "Dr. Ayesha Rao", "Ayurvedic Dermatologist", 8, "ayesha.jpg"),
            ("doctor2@amrutam.com", "Dr. Rahul Sharma", "Panchakarma Specialist", 12, "rahul.jpg"),
            ("doctor3@amrutam.com", "Dr. Meera Nanda", "Ayurvedic Nutritionist", 5, "meera.jpg")
        ]
        
        doctor_ids = []
        for email, name, spec, exp, doc_url in doctors_data:
            result = await db.execute(select(User).where(User.email == email))
            doc = result.scalars().first()
            if not doc:
                doc = User(email=email, password_hash=get_password_hash("password123"), role=UserRole.DOCTOR, is_active=True, is_verified=True)
                db.add(doc)
                await db.commit()
                db.add(Profile(user_id=doc.id, full_name=name, phone_number="8888888888"))
                db.add(DoctorProfile(user_id=doc.id, specialization=spec, experience_years=exp, is_verified_by_admin=True))
                await db.commit()
                print(f"Created Doctor: {name}")
            doctor_ids.append(doc.id)

        # 3. PATIENTS
        patients_data = [
            ("patient1@amrutam.com", "John Doe"),
            ("patient2@amrutam.com", "Jane Smith")
        ]
        patient_ids = []
        for email, name in patients_data:
            result = await db.execute(select(User).where(User.email == email))
            pat = result.scalars().first()
            if not pat:
                pat = User(email=email, password_hash=get_password_hash("password123"), role=UserRole.PATIENT, is_active=True, is_verified=True)
                db.add(pat)
                await db.commit()
                db.add(Profile(user_id=pat.id, full_name=name, phone_number="7777777777"))
                await db.commit()
                print(f"Created Patient: {name}")
            patient_ids.append(pat.id)

        # 4. AVAILABILITY SLOTS
        today = datetime.datetime.now()
        slot_ids = []
        
        for idx, doc_id in enumerate(doctor_ids):
            # Create 3 slots for each doctor
            for i in range(1, 4):
                start_time = today + datetime.timedelta(days=idx, hours=i)
                end_time = start_time + datetime.timedelta(minutes=30)
                
                # Check if slot exists to prevent duplicates on rerun
                stmt = select(AvailabilitySlot).where(AvailabilitySlot.doctor_id == doc_id, AvailabilitySlot.start_time == start_time)
                res = await db.execute(stmt)
                if not res.scalars().first():
                    slot = AvailabilitySlot(
                        doctor_id=doc_id,
                        start_time=start_time,
                        end_time=end_time,
                        is_booked=False
                    )
                    db.add(slot)
                    await db.commit()
                    slot_ids.append(slot.id)
        print("Created Availability Slots.")

        # 5. BOOKINGS & PRESCRIPTIONS
        if len(slot_ids) > 0 and len(patient_ids) > 0:
            # Let's book the very first slot for patient 1
            b_slot_id = slot_ids[0]
            b_pat_id = patient_ids[0]
            
            result = await db.execute(select(AvailabilitySlot).where(AvailabilitySlot.id == b_slot_id))
            target_slot = result.scalars().first()
            
            if target_slot and not target_slot.is_booked:
                # Mark as booked
                target_slot.is_booked = True
                
                # Create Booking
                booking = Booking(
                    slot_id=b_slot_id,
                    patient_id=b_pat_id,
                    doctor_id=target_slot.doctor_id,
                    status="CONFIRMED"
                )
                db.add(booking)
                await db.commit()
                await db.refresh(booking)
                print("Created a Booking.")

                # Create Prescription
                pres = Prescription(
                    id=uuid.uuid4(),
                    booking_id=booking.id,
                    diagnosis=encrypt_data("Mild Acidity (Pitta Imbalance)"),
                    medications=encrypt_data("Amrutam Zeo Malt - 1 tbsp twice a day")
                )
                db.add(pres)
                await db.commit()
                print("Created a Prescription.")
            
        print("Database Seed Complete!")

if __name__ == "__main__":
    if sys.platform == 'win32':
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    asyncio.run(seed())
