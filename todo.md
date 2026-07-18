# Amrutam Telemedicine Application

This project is structured as a monorepo containing both the FastAPI backend and Next.js frontend. 

## Prerequisites

Before running the application, make sure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- [Python](https://www.python.org/downloads/) (v3.10 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) (Running locally or via Docker)
- [Redis](https://redis.io/) (Running locally or via Docker)

## 1. Setup the Database and Redis

Ensure that your PostgreSQL and Redis instances are running locally. 
If you are using Docker, you can run:
```bash
docker run -d --name amrutam-postgres -e POSTGRES_PASSWORD=yourpassword -e POSTGRES_DB=amrutam -p 5432:5432 postgres
docker run -d --name amrutam-redis -p 6379:6379 redis
```

> **Note**: Update the `.env` file in the `backend/` directory with your actual PostgreSQL and Redis credentials.

## 2. Start the Backend (FastAPI)

Open a new terminal window and navigate to the backend directory:

```bash
cd backend
```

**Create a virtual environment and install dependencies:**
```bash
# Windows
python -m venv venv
.\venv\Scripts\activate

# Install requirements
pip install -r requirements.txt
```

**Run Database Migrations (Alembic):**
Ensure your `.env` is configured, then run:
```bash
alembic upgrade head
```

**Start the FastAPI Server:**
```bash
uvicorn src.main:app --reload --port 8000
```
The backend should now be running at `http://localhost:8000`. You can view the API documentation at `http://localhost:8000/docs`.

## 3. Start the Frontend (Next.js)

Open another terminal window and navigate to the frontend directory:

```bash
cd frontend
```

**Install dependencies (if not already installed):**
```bash
npm install
```

**Start the Next.js Development Server:**
```bash
npm run dev
```
The frontend should now be running at `http://localhost:3000`.

## Connectivity Note

The Next.js frontend has been configured to automatically proxy all API requests. 
When the frontend fetches data from `/api/*`, the request is automatically routed to `http://localhost:8000/*`. This bypasses any CORS issues during development. You can use the provided `src/lib/api.ts` utility to easily make these requests from your React components.
