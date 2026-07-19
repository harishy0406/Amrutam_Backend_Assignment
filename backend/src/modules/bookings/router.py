from fastapi import APIRouter, Depends, Header
from sqlalchemy.ext.asyncio import AsyncSession
from src.core.database import get_db
from src.modules.auth.dependencies import require_role
from src.modules.bookings.schemas import BookingCreate, BookingResponse
from src.modules.bookings.service import BookingService
from src.modules.bookings.repository import BookingRepository

router = APIRouter(prefix="/bookings", tags=["Bookings"])

def get_service(db: AsyncSession = Depends(get_db)) -> BookingService:
    repo = BookingRepository(db)
    return BookingService(repo)

@router.get("/", summary="Get Bookings", description="Get a list of all upcoming bookings for the logged-in doctor.")
async def get_bookings(
    current_user = Depends(require_role("doctor")),
    service: BookingService = Depends(get_service)
):
    user_id = str(current_user["id"]) if isinstance(current_user, dict) else str(current_user.id)
    bookings = await service.get_bookings_by_doctor(user_id)
    return {"data": [{
        "id": str(b.id),
        "status": b.status,
        "slot_id": str(b.slot_id),
        "patient_id": str(b.patient_id),
        "created_at": b.created_at.isoformat() if b.created_at else None,
        "updated_at": b.updated_at.isoformat() if b.updated_at else None
    } for b in bookings]}

@router.post("/", response_model=BookingResponse, summary="Create Booking", description="Patients can book an available doctor slot using an idempotency key.")
async def create_booking(
    booking_data: BookingCreate,
    idempotency_key: str = Header(..., description="Unique key for this request"),
    current_user = Depends(require_role("patient")), # Only Patients book!
    service: BookingService = Depends(get_service)
):
    """
    Transactional Booking.
    Locks the slot -> Checks Availability -> Books it.
    """
    result = await service.book_slot(
        idempotency_key, 
        current_user.id, 
        booking_data.slot_id
    )
    
    # Handle the dictionary return from idempotency check vs object return
    if isinstance(result, dict):
        # Convert dict back to object for Pydantic response if needed, 
        # or we can rely on Pydantic to parse dicts too.
        # Ideally, we should fetch the booking object again, but for now:
        return result
        
    return result