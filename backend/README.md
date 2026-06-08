# Healthcare Drips — Backend API

> The Node.js / Express REST API powering the Healthcare Drips platform. Handles authentication, patient data, insurance claims, appointments, payments, real-time notifications, blockchain integration, and more.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](../LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-green)](https://nodejs.org/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](../docs/CONTRIBUTING.md)

---

## Features

- **JWT Authentication** — Secure token-based auth with refresh tokens
- **RESTful API** — Full CRUD for patients, records, claims, appointments, and payments
- **Real-time Updates** — WebSocket (Socket.IO) for live notifications
- **Blockchain Integration** — Ethereum & Stellar smart contract interaction
- **Fraud Detection** — ML-assisted claim fraud analysis
- **Advanced Rate Limiting** — Per-route and per-user request throttling
- **Caching** — Redis / NodeCache for reduced database load
- **Audit Logging** — Full request/response audit trail middleware
- **Zero-Trust Middleware** — Identity verification on every request
- **Database Optimization** — Indexed SQLite with sharding, replication, and backup support

---

## Getting started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9
- Redis (optional, falls back to in-memory cache)
- SQLite (bundled via `better-sqlite3`)

### Installation

```bash
# From the repo root
cd backend
npm install
```

### Environment setup

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000

# Auth
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d

# Database
DB_PATH=./database/healthcare.db

# Cache
REDIS_URL=redis://localhost:6379
CACHE_TTL=300

# Rate limiting
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX=100
```

### Run the server

```bash
# Development (hot-reload)
npm run dev

# Production
npm start
```

The API will be available at `http://localhost:5000`.

---

## API reference

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and receive a JWT |
| POST | `/api/auth/refresh` | Refresh an expired JWT |
| POST | `/api/auth/logout` | Invalidate the current token |

### Patients

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/patients/dashboard/:patientId` | Full dashboard data |
| GET | `/api/patients/:patientId` | Patient profile |
| POST | `/api/patients` | Create a patient profile |
| PUT | `/api/patients/:patientId` | Update a patient profile |

### Medical Records

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/medical-records/patient/:patientId` | All records for a patient |
| GET | `/api/medical-records/:recordId` | Single record |
| POST | `/api/medical-records` | Create a record |
| PUT | `/api/medical-records/:recordId` | Update a record |
| DELETE | `/api/medical-records/:recordId` | Delete a record |

### Insurance Claims

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/claims/patient/:patientId` | All claims for a patient |
| GET | `/api/claims/summary/:patientId` | Claims summary |
| GET | `/api/claims/:claimId` | Single claim |
| POST | `/api/claims` | Submit a new claim |
| PUT | `/api/claims/:claimId/status` | Update claim status |

### Appointments

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/appointments/patient/:patientId` | All appointments |
| GET | `/api/appointments/upcoming/:patientId` | Upcoming appointments |
| GET | `/api/appointments/:appointmentId` | Single appointment |
| POST | `/api/appointments` | Schedule an appointment |
| PUT | `/api/appointments/:appointmentId` | Update an appointment |
| DELETE | `/api/appointments/:appointmentId` | Cancel an appointment |

### Payments

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/payments/patient/:patientId` | Payment history |
| GET | `/api/payments/summary/:patientId` | Payment summary |
| POST | `/api/payments` | Record a payment |

Additional route groups: `blockchain`, `fraudDetection`, `advancedAnalytics`, `notifications`, `advancedSecurity`, `iotHealthMonitoring`, `mlModelServing`, and more — see the `routes/` directory for the full list.

---

## Authentication

All endpoints except `/api/auth/*` require a valid JWT in the `Authorization` header:

```http
Authorization: Bearer <your-jwt-token>
```

---

## WebSocket events

The server emits the following real-time events over Socket.IO:

| Event | Trigger |
|-------|---------|
| `new-medical-record` | A new record is created |
| `new-claim` | A claim is submitted |
| `claim-status-update` | A claim status changes |
| `new-appointment` | An appointment is scheduled |
| `appointment-updated` | An appointment is modified |
| `new-payment` | A payment is recorded |

---

## Database schema

SQLite tables:

| Table | Purpose |
|-------|---------|
| `users` | Auth credentials and roles |
| `patients` | Patient medical profiles |
| `medical_records` | Full medical history |
| `insurance_claims` | Claim tracking |
| `premium_payments` | Payment history |
| `appointments` | Appointment scheduling |
| `notifications` | System notifications |

---

## Project structure

```
backend/
├── server.js               # Entry point
├── routes/                 # Route handlers (one file per domain)
├── services/               # Business logic & integrations
├── middleware/             # Auth, audit, rate-limit, zero-trust, etc.
├── blockchain/             # Ethereum / Stellar interaction helpers
├── database/               # DB init, migrations, optimization, backup
└── .env.example
```

---

## Error format

All errors follow a consistent shape:

```json
{
  "error": "Error Type",
  "message": "Human-readable description",
  "details": "Stack trace or extra info (development only)"
}
```

---

## Contributing

1. Check the [open issues](../../../issues) for bugs or features to work on.
2. Fork the repo and create a branch: `git checkout -b fix/your-fix` or `git checkout -b feat/your-feature`.
3. Follow the existing code style (ESLint config in `package.json`).
4. Run `npm test` before pushing.
5. Open a PR against `main` with a clear description.

See [`docs/CONTRIBUTING.md`](../docs/CONTRIBUTING.md) for the full contribution guide.

---

## Testing

```bash
npm test
```

---

## License

[MIT](../LICENSE)
