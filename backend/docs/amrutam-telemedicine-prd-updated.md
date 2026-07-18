# Product Requirements Document
## Amrutam Telemedicine Platform

| | |
|---|---|
| **Status** | Draft v2.0 |
| **Owner** | M Harish Gautham |
| **Last updated** | July 18, 2026 |
| **Product Type** | Backend-first telemedicine platform with a thin demo frontend |
| **Related Docs** | Architecture Doc, OpenAPI Spec, Security Checklist, Threat Model, Test Plan |

---

## 1. Product Summary

Amrutam Telemedicine is a healthcare platform for Ayurveda-first virtual consultations. The product supports patients, doctors, and admins through a secure, auditable, and production-ready system that handles account lifecycle, doctor discovery, availability management, bookings, consultations, prescriptions, payments, and analytics.

This repository will deliver:
- a backend service with production-grade engineering practices
- a simple frontend demo that connects to the backend and shows the system working end-to-end
- infrastructure as code for local and containerized deployment
- automated tests, CI, documentation, and security/observability artifacts

The backend remains the primary deliverable. The frontend exists to demonstrate the workflows clearly during review and to make the product feel complete.

---

## 2. Product Goals

| Goal | Success Metric |
|---|---|
| Reliable booking | No double-booking under concurrent requests for the same slot |
| Stable performance | p95 reads under 200ms and p95 writes under 500ms in local/load testing |
| Secure access | Authenticated access, RBAC, encryption, audit trails, and rate limiting on sensitive flows |
| Clear demo experience | A reviewer can complete the core workflows without reading source code |
| Production readiness | Containerized deployment, CI, observability, and documented recovery strategy |

---

## 3. Scope

### In Scope
- User registration, login, token refresh, logout, and role-based access control
- Doctor availability creation and listing
- Patient booking with idempotency and concurrency protection
- Consultation lifecycle and encrypted prescriptions
- Doctor search and filtering
- Admin analytics and audit visibility
- A simple frontend demo connected to the backend
- Dockerized local deployment, CI pipeline, and documentation

### Out of Scope for v1
- Native mobile apps
- Real-time video calling implementation
- Insurance claims
- Marketplace/e-commerce for Amrutam products
- Multi-region active-active deployment

---

## 4. Target Users

| Persona | Needs |
|---|---|
| Patient | Find a doctor, book a consultation, view prescription and booking status |
| Doctor | Create availability, manage consultations, issue prescriptions |
| Admin | Review analytics, investigate events, enforce governance |
| Reviewer | See a believable, working system that proves backend quality and product thinking |

---

## 5. Brand and Visual Direction

The frontend should reflect Amrutam's existing identity:
- earthy
- Ayurvedic
- premium
- minimal

The interface should feel calm and trustworthy, not flashy. Use warm neutrals, olive greens, muted golds, and restrained contrast. Avoid bright neon colors, heavy shadows, and overly modern SaaS styling.

### Color Palette

#### Primary Brand Colors
| Purpose | Color | HEX |
|---|---|---|
| Primary Green | Olive Green | `#5E6F3A` |
| Dark Green | Forest Olive | `#3F4D2B` |
| Accent Green | Sage Green | `#7A8F4D` |

#### Neutral Colors
| Purpose | Color | HEX |
|---|---|---|
| Background | Warm Cream | `#F8F4EC` |
| Surface | Off White | `#FFFDF8` |
| Card Background | Soft Beige | `#F3EEDF` |

#### Accent Colors
| Purpose | Color | HEX |
|---|---|---|
| Gold Accent | Ayurvedic Gold | `#C6A969` |
| Sand | Sand Beige | `#D8C7A0` |
| Earth Brown | Brown | `#8B6A43` |

#### Text Colors
| Purpose | HEX |
|---|---|
| Primary Text | `#2E3326` |
| Secondary Text | `#5F6458` |
| Muted Text | `#8E9485` |

#### Status Colors
| Purpose | HEX |
|---|---|
| Success | `#4CAF50` |
| Warning | `#E8B44B` |
| Error | `#D9534F` |
| Info | `#5A8FBF` |

### Frontend Design Principles
- Use a clean, premium healthcare layout
- Keep surfaces soft and grounded
- Use olive green for primary actions and navigation
- Use warm gold for highlights, metrics, badges, and selected states
- Keep typography readable and calm
- Avoid over-decorated cards, gradients, and noisy animations
- Make the first screen practical, not marketing-heavy

### Suggested UI Tokens
```css
--primary: #5E6F3A;
--primary-dark: #3F4D2B;
--primary-light: #7A8F4D;

--background: #F8F4EC;
--surface: #FFFDF8;
--card: #F3EEDF;

--accent: #C6A969;

--text: #2E3326;
--text-secondary: #5F6458;
--border: #E5DDCB;

--success: #4CAF50;
--warning: #E8B44B;
--error: #D9534F;
```

---

## 6. Product Experience

The product should have two layers:

1. Backend system for core workflows and API consumers
2. Simple frontend demo for human walkthroughs

### Frontend Demo Requirements
The frontend should be intentionally small and focused. It should show the backend working in a believable workflow without turning into a full consumer application.

Recommended screens:
- Login and role selection
- Doctor directory and availability
- Booking flow
- Payment status view
- Consultation and prescription view
- Admin analytics view

Recommended frontend behavior:
- connect directly to the backend API
- support token-based auth
- show success, failure, and loading states
- reuse the backend's real responses
- keep interactions simple enough for live demo usage

### Frontend UX Priorities
- clear call-to-action hierarchy
- fast scanning of availability and booking state
- soft, premium healthcare tone
- mobile-friendly layout
- no unnecessary user training

---

## 7. Core Workflows

### 7.1 User Lifecycle
- Register as patient or doctor
- Login and receive access and refresh tokens
- Refresh tokens safely
- Logout or revoke sessions
- Enforce RBAC for patient, doctor, and admin
- Support inactive-user blocking

Acceptance criteria:
- protected routes reject anonymous access
- role-locked routes reject unauthorized roles
- tokens expire according to policy

### 7.2 Doctor Availability
- Doctors create one-off availability slots
- Overlapping slots are rejected
- Doctors can list their own availability
- Slot data is paginated and time-aware

Acceptance criteria:
- overlapping slot creation fails cleanly
- availability list is sorted and scoped to the doctor

### 7.3 Booking
- Patients book available slots
- Every write request requires idempotency support
- Booking must use transactional locking to prevent double-booking
- Booking status should move through a controlled lifecycle

Acceptance criteria:
- concurrent booking attempts produce exactly one success
- repeated retries with the same idempotency key return the same outcome

### 7.4 Consultation and Prescription
- Doctor can create a prescription for a confirmed consultation
- Prescriptions are immutable after creation
- Prescription data is encrypted at rest
- Patient and assigned doctor can view it

Acceptance criteria:
- unauthorized access is rejected
- a prescription cannot be overwritten by update

### 7.5 Search and Filtering
- Search doctors by name and specialization
- Paginate all list endpoints
- Cache read-heavy doctor search results

Acceptance criteria:
- search remains responsive under repeated queries
- response format is stable and UI-friendly

### 7.6 Payments and Saga Handling
- Create a payment intent for a booking
- Process webhook callbacks
- Confirm booking on successful payment
- Release slot and mark booking failed on payment failure

Acceptance criteria:
- payment events are idempotent
- booking and slot state stay consistent after success/failure

### 7.7 Admin Analytics
- Show consultation counts
- Show revenue summary
- Show doctor utilization
- Restrict access to admin users only

Acceptance criteria:
- analytics data excludes sensitive personal details
- unauthorized users cannot access admin endpoints

---

## 8. Data Model

Core entities:
- users
- profiles
- doctors
- availability_slots
- consultations
- prescriptions
- payments
- audit_logs

Recommended supporting entities:
- refresh_tokens
- idempotency_keys

Design principles:
- UUID primary keys
- timezone-aware timestamps
- foreign keys and unique constraints
- append-only audit behavior
- explicit booking and payment state fields

---

## 9. API Requirements

API style:
- RESTful HTTP API
- OpenAPI documented
- modular route groups by domain

Suggested route groups:
- `/auth`
- `/availability`
- `/bookings`
- `/payments`
- `/consultations`
- `/doctors`
- `/admin`

API rules:
- validate all inputs
- standardize error responses
- require authorization where needed
- enforce idempotency on writes
- keep response shapes frontend-friendly

---

## 10. Architecture Requirements

### High-Level Architecture
- FastAPI application layer
- PostgreSQL for relational data
- Redis for caching, idempotency, and rate limiting
- Background worker for stale booking cleanup
- Docker Compose for local deployment

### Booking Flow
1. Patient selects a slot
2. Backend checks idempotency key
3. Backend locks slot row in the database
4. Backend creates a pending booking
5. Payment is initiated
6. Webhook confirms or fails payment
7. Booking becomes confirmed or failed
8. Compensation releases the slot when needed

### Retry and Backoff
- retry transient background operations
- use exponential backoff for stale booking cleanup or downstream failures
- keep payment webhook processing idempotent

### Caching
- cache doctor search results
- keep cache TTL short enough to avoid stale availability perception
- invalidate relevant keys on profile or availability updates

### Transaction Management
- wrap booking creation and state updates in DB transactions
- use pessimistic locking for slot reservation
- write audit logs inside the same logical transaction when possible

### Data Partitioning
- prepare for partitioning high-growth tables such as bookings, audit logs, and payments
- partition by time when volume grows

### Backup and DR
- daily automated backups for Postgres
- tested restore procedure
- clear RPO/RTO targets documented in architecture

---

## 11. Security Requirements

- bcrypt password hashing
- JWT access and refresh tokens
- role-based authorization
- rate limiting on login and other sensitive routes
- request validation on all APIs
- encryption for prescription payloads
- audit logs for sensitive actions
- secrets sourced from environment variables
- dependency scanning in CI
- key rotation plan documented
- MFA requirement for doctor and admin roles in the product spec

### Threat Model Expectations
- broken authentication
- broken access control
- replay and duplicate request handling
- sensitive data exposure
- injection risks
- insecure dependency usage
- webhook forgery
- audit trail tampering

---

## 12. Observability Requirements

The system should provide:
- structured logs
- request correlation IDs
- metrics endpoint
- health check endpoint
- background job logging

Recommended additions:
- distributed tracing
- dashboard for latency, error rate, and booking state transitions
- alerting for failed payment webhooks, booking failures, and worker errors

---

## 13. CI/CD Requirements

Pipeline stages:
- lint
- test
- security scan
- build
- deploy

CI must:
- run in containers
- validate core workflows
- fail on critical security issues
- remain reproducible on a fresh clone

Deployment target:
- containerized deployment for local demo
- cloud-ready mapping for production

---

## 14. Documentation Deliverables

Required docs:
- README with setup and demo steps
- architecture document
- OpenAPI schema
- security checklist and threat model
- frontend usage notes
- test plan and coverage summary

Optional but helpful:
- sequence diagram
- ER diagram
- deployment diagram
- troubleshooting guide

---

## 15. Acceptance Criteria

The project is complete when:
- the backend core workflows are implemented and tested
- the frontend can demonstrate the main workflows end-to-end
- the system is runnable with documented setup steps
- the CI pipeline passes on a clean clone
- the security checklist is not just documented but reflected in code
- observability artifacts exist and are usable
- the architecture and threat model are written clearly enough for review

---

## 16. Suggested Demo Script

1. Open the frontend
2. Register or login as a patient
3. Search for a doctor
4. View availability
5. Book a slot with idempotency
6. Show payment state changes
7. Login as doctor and create/view a prescription
8. Login as admin and review analytics
9. Show logs, metrics, and the audit trail

---

## 17. Notes for Implementation

- Keep the frontend thin and purposeful
- Prioritize trustworthy behavior over visual complexity
- Preserve the backend as the main source of truth
- Use the palette consistently across the app
- Treat documentation as part of the deliverable, not an afterthought

