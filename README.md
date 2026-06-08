# Healthcare Drips — Decentralized Healthcare Insurance Platform

> An open-source, blockchain-powered healthcare insurance platform that enables transparent claim processing, verified contributor participation, and decentralized fund management — built on Ethereum, Stellar/Soroban, and Node.js.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](docs/CONTRIBUTING.md)
[![Node.js](https://img.shields.io/badge/Node.js-%3E%3D18-green)](https://nodejs.org/)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.x-purple)](https://soliditylang.org/)

---

## What is Healthcare Drips?

Healthcare Drips is a decentralized application (DApp) that reimagines how medical insurance claims are submitted, verified, and paid out. By anchoring every approval step on-chain, the platform removes the opacity and delays typical of traditional insurance workflows.

Key goals:
- Give patients a transparent view of their claim status at every stage
- Let hospital and lab admins verify bills with on-chain accountability
- Allow insurance admins to calculate and process payouts trustlessly
- Reward verified healthcare professionals who contribute to the platform with **HCT tokens**

---

## How it works

1. **Patient** logs in, uploads medical/lab bills, and submits a claim. Notifications are sent to the hospital and lab admins.
2. **Hospital admin** reviews and approves the bills — approval is written to the smart contract.
3. **Lab admin** approves the lab-test bills — also stored on-chain.
4. Once both parties approve, the **insurance admin** is notified, calculates the claim amount, and processes the payout automatically.

The `HealthCare.sol` contract holds the core claim logic. The `Web-client/` folder is the React frontend that talks to the deployed contract via Web3.

---

## Project structure

```
.
├── Web-client/          # React frontend (Ethereum DApp)
│   └── src/
│       ├── index.js          # App entry point & login routing
│       ├── HealthCare.js     # Contract ABI + web3 instance
│       ├── web3.js           # Web3 provider setup
│       ├── patient.js        # Patient dashboard
│       ├── hadmin.js         # Hospital admin view
│       ├── ladmin.js         # Lab admin view
│       └── insurance.js      # Insurance admin view
├── backend/             # Node.js / Express REST API
│   ├── server.js
│   ├── routes/               # All API route handlers
│   ├── services/             # Business logic layer
│   ├── middleware/           # Auth, rate limiting, audit, etc.
│   ├── blockchain/           # Blockchain integration helpers
│   └── database/             # SQLite schema & migrations
├── src/                 # Soroban (Stellar) smart contract — Rust
│   ├── lib.rs
│   ├── main.rs
│   └── healthcare_drips.rs
├── docs/                # Guides, API docs, contributor resources
├── .github/             # Issue templates & CI/CD workflows
├── Cargo.toml
└── .env.example
```

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 18 |
| npm | ≥ 9 |
| MetaMask | Latest browser extension |
| Ganache | Local Ethereum node (or any testnet RPC) |
| Rust + cargo | For Soroban contract compilation |

---

## Quick start

### 1. Clone the repo

```bash
git clone https://github.com/<your-org>/healthcare-drips.git
cd healthcare-drips
```

### 2. Deploy the Solidity contract

1. Open [Remix IDE](https://remix.ethereum.org/) and paste in `HealthCare.sol`.
2. Start Ganache and connect MetaMask to it (`http://127.0.0.1:7545`, Chain ID `1337`).
3. Import the first three Ganache accounts into MetaMask:
   - Account 1 → Hospital Admin
   - Account 2 → Lab Admin
   - Account 3 → Patient
4. In Remix, select **Injected Provider** and deploy the contract using the Lab Admin address as the constructor argument.
5. Copy the deployed contract address into `Web-client/src/HealthCare.js`.

### 3. Run the React frontend

```bash
cd Web-client
npm install
npm start
```

Open `http://localhost:3000` and log in with one of the demo passwords:

| Password    | Role            |
|-------------|-----------------|
| `patient`   | Patient         |
| `hadmin`    | Hospital Admin  |
| `labadmin`  | Lab Admin       |
| `insurance` | Insurance Admin |

### 4. Run the Node.js backend

```bash
cd backend
cp .env.example .env   # fill in your values
npm install
npm start              # or: npm run dev  (hot-reload)
```

The API is available at `http://localhost:5000`.

---

## Environment variables

Copy `.env.example` to `.env` in the `backend/` folder and fill in:

```env
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRE=7d
DB_PATH=./database/healthcare.db
REDIS_URL=redis://localhost:6379
CACHE_TTL=300
RATE_LIMIT_WINDOW=900000
RATE_LIMIT_MAX=100
```

Never commit real secrets — `.env` is already in `.gitignore`.

---

## Known issues

- The records table in the React frontend does not yet display records fetched from the contract (see [Issue #1](../../issues/1)).
- Login uses a password-only approach for demo purposes — not production-safe.

Check the [Issues tab](../../issues) for the full backlog and good first issues.

---

## Contributing

We welcome contributions from developers, healthcare professionals, security researchers, and anyone who wants to improve decentralized healthcare.

### For developers

1. **Fork** this repository.
2. **Create a branch** off `main`:
   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```
3. **Make your changes**, following the code style in the existing files.
4. **Test** your changes locally (see [backend README](backend/README.md) for test commands).
5. **Open a Pull Request** against the `main` branch with a clear description of what you changed and why.
6. Add a reviewer and respond to feedback promptly.

Full guide: [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md)  
Contributor guide: [`docs/CONTRIBUTOR-GUIDE.md`](docs/CONTRIBUTOR-GUIDE.md)

### For healthcare professionals

If you're a medical professional who wants to review cases, provide consultation, or contribute domain expertise, apply using our [Contributor Application](.github/ISSUE_TEMPLATE/contributor-application.md) issue template.

Verified contributors earn **HCT token rewards** and receive a **Verified Contributor badge**.

### Good first issues

Look for issues tagged [`good first issue`](../../issues?q=label%3A%22good+first+issue%22) to get started quickly.

### Reporting bugs & requesting features

- Use the [Issues tab](../../issues) to report bugs or suggest features.
- For security vulnerabilities, please **do not** open a public issue — email the maintainers directly.

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Smart contract (EVM) | Solidity 0.8.x |
| Smart contract (Stellar) | Rust / Soroban |
| Frontend | React, Web3.js |
| Backend API | Node.js, Express |
| Database | SQLite (indexed), Redis (cache) |
| Auth | JWT + bcrypt |
| Real-time | WebSocket (Socket.IO) |
| CI/CD | GitHub Actions |

---

## License

[MIT](LICENSE) — free to use, modify, and distribute with attribution.

---

## Community

- Open an [Issue](../../issues) for questions, bugs, or ideas.
- Check [`docs/`](docs/) for API references, deployment guides, and platform strategy docs.
- See [`FEATURE_IMPLEMENTATION_SUMMARY.md`](FEATURE_IMPLEMENTATION_SUMMARY.md) for a changelog of recent features.
