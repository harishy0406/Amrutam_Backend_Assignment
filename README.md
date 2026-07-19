# Amrutam Telemedicine Platform
> **A robust, full-stack telemedicine solution with role-based access, idempotent bookings, and a modern web interface.**

[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green?logo=fastapi)](https://fastapi.tiangolo.com)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql)](https://postgresql.org)
[![Redis](https://img.shields.io/badge/Redis-Cache-DC382D?logo=redis)](https://redis.io)
[![Docker](https://img.shields.io/badge/Docker-Containerization-blue?logo=docker)](https://docker.com)

## 🎯 Overview

Amrutam Telemedicine Platform is a comprehensive system designed to connect patients with Ayurvedic doctors. It features a scalable FastAPI backend with robust concurrency handling and a modern Next.js frontend for an intuitive user experience.

The platform supports distinct workflows for Patients, Doctors, and Administrators, ensuring secure and efficient management of appointments, prescriptions, and users.

## ✨ Highlights

- 🎫 **Role-based Portals** — Distinct interfaces for Patients, Doctors, and Admins.
- 📅 **Robust Booking System** — Idempotent bookings with pessimistic locking to prevent double-booking.
- 💳 **Saga Pattern Payments** — Resilient payment workflows that handle failures and rollbacks gracefully.
- ⚡ **High Performance** — Redis caching for read-heavy operations and optimized PostgreSQL queries.
- 🔐 **Security First** — JWT-based authentication, RBAC middleware, and password hashing.
- 🎨 **Modern UI** — Next.js frontend built with Tailwind CSS for responsive and accessible design.
- 🐳 **Dockerized** — Fully containerized backend infrastructure (FastAPI, Postgres, Redis) for easy deployment.

## 🛠️ Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | Next.js 15, React, Tailwind CSS |
| Backend | Python 3.11, FastAPI |
| ORM | SQLAlchemy 2.0 (async) + asyncpg |
| Database | PostgreSQL |
| Caching & Rate Limiting | Redis |
| Containerization | Docker, Docker Compose |
| Migrations | Alembic |

## 📂 Project Structure

```text
Amrutam_Backend_Assignment/
├── backend/               # FastAPI backend application
│   ├── src/               # Application source code
│   ├── infra/             # Docker Compose and Prometheus config
│   ├── tests/             # Pytest test suite
│   ├── alembic/           # Database migrations
│   └── README.md          # Backend-specific documentation
├── frontend/              # Next.js frontend application
│   ├── src/app/           # Next.js App Router pages
│   ├── src/components/    # Reusable React components
│   ├── src/lib/           # API and utility functions
│   └── README.md          # Frontend-specific documentation
└── README.md              # Project root documentation
```

## ⚡ Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.11+
- Docker & Docker Compose

### 1. Run the Backend Infrastructure

```bash
cd backend/infra
docker-compose up -d
```

### 2. Set Up the Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # macOS/Linux

pip install -r requirements.txt
alembic upgrade head
python src/scripts/seed_db.py
uvicorn src.main:app --reload --port 8000
```
Backend API available at: `http://localhost:8000/docs`

### 3. Set Up the Frontend

```bash
cd frontend
npm install
npm run dev
```
Frontend available at: `http://localhost:3000`

## 🤝 Contributing

Contributions are welcome. Please keep changes focused and document any schema or configuration changes.

---

<div align="center">
⭐ If you find this project helpful, please star it! ⭐
</div>
