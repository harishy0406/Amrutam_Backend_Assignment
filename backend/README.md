# Amrutam Backend API Testing
> **High-performance, secure, and concurrent telemedicine API.**

[![FastAPI](https://img.shields.io/badge/FastAPI-Framework-green?logo=fastapi)](https://fastapi.tiangolo.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql)](https://postgresql.org)
[![Redis](https://img.shields.io/badge/Redis-Cache-DC382D?logo=redis)](https://redis.io)

## 🎯 Overview

The Amrutam backend is built with FastAPI and designed for **correctness under concurrency**, **security**, and **idempotency**. It uses asynchronous SQLAlchemy with PostgreSQL and Redis for caching and rate-limiting.

## ✨ Highlights

- 🔐 **JWT Authentication** — Secure login, refresh token rotation, and RBAC.
- 🛡️ **Concurrency Safety** — Pessimistic DB locking to guarantee no double bookings.
- 🔁 **Idempotency Middleware** — Prevents duplicate write operations (e.g., clicking book twice).
- 🔄 **Background Jobs** — APScheduler cleans up stale, unpaid bookings automatically.
- 📊 **Custom Swagger UI** — A beautiful, dark-themed, and fully customized Swagger documentation interface.
- 📈 **Prometheus Metrics** — Application instrumented for observability.

## 🛠️ Architecture & Data Model

Core tables: `users`, `profiles`, `doctor_profiles`, `availability_slots`, `bookings`, `prescriptions`, `audit_logs`.

- **Idempotency**: Implemented via `IdempotencyMiddleware` backed by Redis.
- **Saga Pattern**: Payment failures trigger automated release of availability slots.
- **Audit Logging**: Append-only audit logs track all critical business operations.

## ⚡ Getting Started

1. Set up your `.env` file (see `.env.example`).
2. Run database and Redis via Docker Compose: `cd infra && docker-compose up -d`.
3. Apply migrations: `alembic upgrade head`.
4. Run the seed script: `python src/scripts/seed_db.py`.
5. Start the server: `uvicorn src.main:app --reload --port 8000`.

## 🔑 Key API Endpoints

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| `GET` | `/docs` | ❌ | Custom Dark Theme Swagger UI |
| `POST` | `/auth/login` | ❌ | Authenticate and retrieve JWT |
| `GET` | `/doctors` | ✅ Any | List verified doctors |
| `POST` | `/bookings/book` | ✅ Patient | Create a booking (Requires `Idempotency-Key`) |
| `POST` | `/prescriptions` | ✅ Doctor | Create a prescription for a booking |
