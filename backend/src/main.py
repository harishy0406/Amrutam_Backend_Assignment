from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from fastapi_limiter import FastAPILimiter
from src.common.cache import cache

# --- NEW IMPORTS ---
from prometheus_fastapi_instrumentator import Instrumentator
from src.core.middleware import RequestIDMiddleware
# -------------------

from src.modules.auth.router import router as auth_router
from src.modules.availability.router import router as availability_router
from src.modules.bookings.router import router as booking_router
from src.modules.payment.router import router as payment_router
from src.modules.bookings.jobs import cancel_stale_bookings
from src.modules.consultations.router import router as consultation_router
from src.modules.doctors.router import router as doctors_router
from src.modules.admin.router import router as admin_router
from src.common.idempotency import IdempotencyMiddleware

scheduler = AsyncIOScheduler()

@asynccontextmanager
async def lifespan(app: FastAPI):
    print("LIFESPAN STARTING...")
    await FastAPILimiter.init(cache.redis)
    
    scheduler.add_job(cancel_stale_bookings, 'interval', seconds=60)
    scheduler.start()
    
    yield
    
    print("🛑 SHUTDOWN...")
    scheduler.shutdown()

from fastapi.openapi.docs import get_swagger_ui_html

app = FastAPI(
    title="Amrutam Backend API Testing",
    lifespan=lifespan,
    docs_url=None  # Disable default docs
)

@app.get("/docs", include_in_schema=False)
async def custom_swagger_ui_html_endpoint():
    html = get_swagger_ui_html(
        openapi_url=app.openapi_url,
        title=app.title + " - Swagger UI",
    )
    body = html.body.decode("utf-8")
    
    custom_css = """
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&display=swap');
        
        body, .swagger-ui {
            font-family: 'Outfit', sans-serif !important;
            background-color: #121212 !important;
            color: #E0E0E0 !important;
        }
        .swagger-ui .topbar {
            background-color: #1E1E1E !important;
            border-bottom: 3px solid #BB86FC !important;
        }
        .swagger-ui .topbar-wrapper::before {
            content: '🧪 💻 ⚙️ ';
            font-size: 28px;
            margin-right: 12px;
        }
        .swagger-ui .topbar-wrapper img {
            display: none !important; /* Hide original logo */
        }
        
        /* Dark Theme Overrides */
        .swagger-ui .info .title, .swagger-ui .info p, .swagger-ui .info li, .swagger-ui .info h1, .swagger-ui .info h2, .swagger-ui .info h3, .swagger-ui .info h4, .swagger-ui .info h5 {
            color: #E0E0E0 !important;
        }
        .swagger-ui .scheme-container {
            background-color: #1E1E1E !important;
            box-shadow: none !important;
            border-bottom: 1px solid #333 !important;
        }
        
        /* Rounded Blocks */
        .swagger-ui .opblock {
            border-radius: 16px !important;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3) !important;
            margin-bottom: 15px !important;
            border: 1px solid #333 !important;
        }
        
        /* Colors for different methods */
        .swagger-ui .opblock.opblock-post {
            background: rgba(187, 134, 252, 0.08) !important;
            border-color: rgba(187, 134, 252, 0.5) !important;
        }
        .swagger-ui .opblock.opblock-post .opblock-summary-method {
            background: #BB86FC !important;
            border-radius: 12px !important;
            color: #000 !important;
        }
        
        .swagger-ui .opblock.opblock-get {
            background: rgba(3, 218, 197, 0.08) !important;
            border-color: rgba(3, 218, 197, 0.5) !important;
        }
        .swagger-ui .opblock.opblock-get .opblock-summary-method {
            background: #03DAC5 !important;
            border-radius: 12px !important;
            color: #000 !important;
        }
        
        .swagger-ui .opblock.opblock-put {
            background: rgba(207, 102, 121, 0.08) !important;
            border-color: rgba(207, 102, 121, 0.5) !important;
        }
        .swagger-ui .opblock.opblock-put .opblock-summary-method {
            background: #CF6679 !important;
            border-radius: 12px !important;
            color: #000 !important;
        }

        .swagger-ui .opblock.opblock-delete {
            background: rgba(255, 82, 82, 0.08) !important;
            border-color: rgba(255, 82, 82, 0.5) !important;
        }
        .swagger-ui .opblock.opblock-delete .opblock-summary-method {
            background: #FF5252 !important;
            border-radius: 12px !important;
            color: #000 !important;
        }
        
        /* Rounded Buttons */
        .swagger-ui .btn {
            border-radius: 24px !important;
            font-weight: 600 !important;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2) !important;
        }
        .swagger-ui .btn.execute {
            background-color: #BB86FC !important;
            color: #000 !important;
            border-color: #BB86FC !important;
        }
        .swagger-ui .btn.authorize {
            color: #03DAC5 !important;
            border-color: #03DAC5 !important;
        }
        .swagger-ui .btn.authorize svg {
            fill: #03DAC5 !important;
        }
        
        /* Text Colors */
        .swagger-ui .opblock-summary-path {
            color: #E0E0E0 !important;
        }
        .swagger-ui .opblock-summary-description {
            color: #A0A0A0 !important;
        }
        .swagger-ui .opblock-description-wrapper p {
            color: #E0E0E0 !important;
        }
        .swagger-ui .parameter__name, .swagger-ui .parameter__type {
            color: #E0E0E0 !important;
        }
        .swagger-ui .responses-inner h4, .swagger-ui .responses-inner h5, .swagger-ui .response-col_status, .swagger-ui .response-col_description {
            color: #E0E0E0 !important;
        }
        .swagger-ui .markdown p, .swagger-ui .markdown pre, .swagger-ui table thead tr th, .swagger-ui table tbody tr td {
            color: #E0E0E0 !important;
        }
        
        /* Models Section */
        .swagger-ui section.models {
            border: 1px solid #333 !important;
            border-radius: 16px !important;
            background-color: #1E1E1E !important;
        }
        .swagger-ui section.models h4, .swagger-ui section.models h5, .swagger-ui section.models span, .swagger-ui .model-title, .swagger-ui .model {
            color: #E0E0E0 !important;
        }
        .swagger-ui .prop-type {
            color: #BB86FC !important;
        }
        
        /* Inputs & Modals */
        .swagger-ui input, .swagger-ui textarea, .swagger-ui select {
            background-color: #2D2D2D !important;
            color: #FFF !important;
            border: 1px solid #555 !important;
            border-radius: 8px !important;
        }
        .swagger-ui .dialog-ux .modal-ux {
            background-color: #1E1E1E !important;
            color: #E0E0E0 !important;
            border: 1px solid #333 !important;
            border-radius: 16px !important;
        }
        .swagger-ui .dialog-ux .modal-ux-header h3, .swagger-ui .dialog-ux .modal-ux-content h4 {
            color: #E0E0E0 !important;
        }
    </style>
    """
    from fastapi.responses import HTMLResponse
    body = body.replace("</head>", custom_css + "</head>")
    return HTMLResponse(body)

# --- 1. ADD METRICS (Prometheus) ---
# Exposes /metrics endpoint automatically
Instrumentator().instrument(app).expose(app)

# --- 2. ADD REQUEST ID MIDDLEWARE ---
# Must be added BEFORE other middleware to catch everything
app.add_middleware(RequestIDMiddleware)

# --- 3. EXISTING MIDDLEWARE ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:8000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.add_middleware(IdempotencyMiddleware)

# Routers
app.include_router(auth_router)
app.include_router(availability_router)
app.include_router(booking_router)
app.include_router(payment_router)
app.include_router(consultation_router)
app.include_router(doctors_router)
app.include_router(admin_router)

@app.get("/health")
def health_check():
    return {"status": "active"}