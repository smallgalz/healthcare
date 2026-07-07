# 🏥 MediChain - Blockchain Healthcare Insurance Platform

A comprehensive Web3 healthcare platform built on **Stellar/Soroban** that enables **recurring insurance premium payments**, **AI-driven risk assessment**, **multi-token support**, and **contributor-driven governance** for medical insurance claims.

[![CI/CD Pipeline](https://github.com/sandrawillow001-afk/medichain-platform/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/sandrawillow001-afk/medichain-platform/actions/workflows/ci-cd.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-blue.svg)](https://smallgalz.github.io/healthcare/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture](#-architecture)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Smart Contracts](#-smart-contracts)
- [API Reference](#-api-reference)
- [Security](#-security)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

MediChain revolutionizes healthcare insurance by combining:

- **Blockchain Transparency** - All claims, payments, and decisions recorded immutably on Stellar
- **AI-Powered Analytics** - Fraud detection, premium adjustments, and risk assessment using machine learning
- **Multi-Token Support** - Pay premiums in XLM, USDC, or custom tokens with automatic DEX conversion
- **Contributor Governance** - Community-driven funding approvals with reputation-based rewards
- **Enterprise Security** - HIPAA-ready data handling with zero-trust architecture

### Why Stellar?

| Feature              | Ethereum     | Stellar       | Improvement     |
| -------------------- | ------------ | ------------- | --------------- |
| **Transaction Fees** | $20-100      | ~$0.01        | 99.9% cheaper   |
| **Block Time**       | ~15s         | ~5s           | 3x faster       |
| **Throughput**       | ~15 TPS      | ~400 TPS      | 25x higher      |
| **Multi-sig**        | Custom       | Native        | Built-in        |
| **Finality**         | ~1 min       | ~10s          | 6x faster       |

---

## 🏗️ Architecture

```
medichain-platform/
├── 📦 src/                           # Stellar/Soroban smart contracts (Rust)
│   ├── medichain_platform.rs        # Main contract - premiums & governance
│   ├── dynamic_premium_adjustment.rs # AI-driven premium calculations
│   ├── parametric_insurance.rs       # Parametric insurance policies
│   ├── multi_token_tests.rs          # Multi-token test suite
│   ├── lib.rs                        # Module exports
│   └── main.rs                       # Entry point
├── ⚙️ backend/                       # Node.js/Express API server
│   ├── server.js                     # Main server entry
│   ├── routes/                       # 40+ API route handlers
│   ├── services/                     # Business logic & AI services
│   ├── middleware/                   # Auth, security, caching
│   └── database/                     # SQLite schema & migrations
├── 🌐 frontend/                      # React dApp (modern UI)
│   └── src/
│       └── components/               # React components
├── 🎨 Web-client/                    # Original React web client
├── ⚙️ scripts/                       # Deployment & pipeline tools
├── 🐳 k8s/                           # Kubernetes manifests
├── 📖 docs/                          # Documentation
├── 📋 .github/                       # GitHub Actions & templates
├── 🐳 backend/Dockerfile             # Backend container
├── 🐳 frontend/Dockerfile            # Frontend container
└── 📦 Cargo.toml                     # Rust project config
```

---

## 🔧 Key Features

### 🏥 Insurance Premium Drips
- **Automated recurring payments** with flexible schedules (daily, weekly, monthly)
- **Multi-token support** (XLM, USDC, custom tokens) with Stellar DEX integration
- **Slippage protection** with configurable tolerances for DEX swaps
- **Emergency pause** functionality for administrative control
- **Percentage-based distributions** across multiple tokens

### 🤖 AI-Driven Premium Adjustments
- **Risk assessment engine** analyzing claim history and health metrics (BMI, blood pressure, cholesterol)
- **Dynamic pricing** with automatic adjustments based on risk factors
- **Market condition analysis** integrating inflation and healthcare cost indices
- **Predictive analytics** forecasting future claims and utilization patterns
- **Governance controls** with multi-level approval for significant changes

### 🕵️ Advanced Fraud Detection
- **Machine learning algorithms** for pattern analysis and anomaly detection
- **Real-time analysis** on claim submission with risk scoring (Low/Medium/High/Critical)
- **Manual review workflow** for flagged claims
- **Analytics dashboard** with fraud statistics and trend analysis

### 👥 Contributor Governance
- **Issue-based funding** for medical treatments with 8 funding categories
- **Community voting** on claim approvals with multi-signature security
- **Reputation system** with 5 levels (Junior → Master)
- **Tiered rewards** (10-200 HCT tokens per approved application)
- **Reputation decay** (5% monthly for inactive contributors)

### 👤 Enhanced Contributor Verification
- **KYC integration** with identity document verification
- **Professional license verification** for healthcare credentials
- **Automated tier advancement** based on reputation thresholds
- **Comprehensive audit trail** for all verification activities

### 🛡️ Security & Compliance
- **Zero-trust architecture** with comprehensive security middleware
- **HIPAA-ready** healthcare data protection
- **Role-based access control** (Patient, Provider, Admin, Insurer)
- **Rate limiting** (100 requests/15min per IP)
- **End-to-end encryption** for sensitive data
- **Audit trails** with complete logging of all operations
- **Multi-factor authentication** support

### 📊 Analytics & Reporting
- **Real-time dashboards** with patient, provider, and admin analytics
- **Advanced reporting** with custom report generation
- **Interactive data visualization** with charts and graphs
- **Performance metrics** tracking system health and fraud detection accuracy

### 💰 Multi-Token Premium Support
- **Automatic token conversion** via Stellar DEX
- **Smart routing** for optimal swap rates
- **Real-time token balance tracking** with USD valuation
- **Auto-rebalancing engine** for portfolio drift management
- **Configurable alerts** for token balance thresholds

---

## 🛠️ Technology Stack

### Blockchain Layer
| Component | Technology |
|-----------|------------|
| **Language** | Rust |
| **Framework** | Soroban SDK |
| **Blockchain** | Stellar |
| **Features** | Smart contracts, token operations, DEX integration |

### Backend Layer
| Component | Technology |
|-----------|------------|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | SQLite (with Redis caching) |
| **Real-time** | Socket.IO |
| **Authentication** | JWT + Multi-factor |
| **Security** | Helmet, CORS, Rate limiting |

### Frontend Layer
| Component | Technology |
|-----------|------------|
| **Framework** | React 18 |
| **Styling** | Tailwind CSS, Framer Motion |
| **Wallet** | Freighter (Stellar) + MetaMask (Ethereum) |
| **PWA** | Service workers, offline support |
| **Real-time** | Socket.IO client |

### Development Tools
| Tool | Purpose |
|------|---------|
| **Jest + Supertest** | Backend testing |
| **React Testing Library** | Frontend testing |
| **Soroban testutils** | Contract testing |
| **ESLint + Clippy** | Code linting |
| **Lighthouse** | Performance auditing |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+
- **Rust** 1.70+ (with `wasm32v1-none` target)
- **Soroban CLI** (`cargo install soroban-cli`)
- **Stellar account** with test XLM (from [Friendbot](https://friendbot.stellar.org/))
- **Freighter wallet** browser extension (for frontend)

### 1. Clone & Install Backend

```bash
git clone https://github.com/sandrawillow001-afk/medichain-platform.git
cd medichain-platform

# Backend setup
cd backend
npm install
npm run dev     # Starts on localhost:5000
```

### 2. Setup Frontend

```bash
# Modern frontend
cd frontend
npm install
npm start       # Starts on localhost:3000

# OR original web client
cd Web-client
npm install
npm start       # Starts on localhost:3000
```

### 3. Build & Test Smart Contracts

```bash
# Build Stellar contract
cargo build --target wasm32v1-none --release

# Run tests
cargo test
```

### 4. Deploy to Testnet

```bash
# Set environment variables
export SECRET_KEY=your_stellar_secret_key
export PUBLIC_KEY=your_stellar_public_key

# Run deployment script
bash scripts/deploy.sh
```

### 5. Initialize Database (Optional)

```bash
cd backend
npm run initialize:premium   # Set up premium adjustment data
```

---

## 📁 Project Structure

### Smart Contracts (`src/`)

```
src/
├── medichain_platform.rs        # Main contract: premiums, issues, governance
├── dynamic_premium_adjustment.rs # AI-driven premium calculations on-chain
├── parametric_insurance.rs       # Parametric insurance with oracle triggers
├── rate_limiting.rs              # Rate limiting for contract operations
├── real_time_processing.rs       # Real-time data processing
├── multi_token_tests.rs          # Multi-token integration tests
├── enhanced_contributor_tests.rs # Contributor verification tests
├── integration_tests.rs          # Full integration tests
├── lib.rs                        # Module declarations
├── main.rs                       # Binary entry point
└── config/                       # Configuration management contract
```

### Backend API (`backend/`)

```
backend/
├── server.js                     # Express server entry point
├── package.json                  # Dependencies
├── routes/                       # API endpoints (40+ routes)
│   ├── claims.js                 # Claim processing
│   ├── payments.js               # Payment management
│   ├── fraudDetection.js         # ML fraud detection
│   ├── premiumAdjustments.js     # AI premium adjustments
│   ├── medicalRecords.js         # Health records management
│   ├── blockchain.js             # Blockchain integration
│   └── ...
├── services/                     # Business logic
│   ├── fraudDetectionService.js  # ML fraud detection engine
│   ├── premiumAdjustmentEngine.js# AI premium calculation
│   ├── machineLearningService.js # ML model serving
│   └── ...
├── middleware/                   # Security & validation
│   ├── auth.js                  # JWT authentication
│   ├── zeroTrust.js             # Zero-trust security
│   └── ...
├── database/                    # Data layer
│   ├── init.js                  # Schema initialization
│   └── BackupManager.js         # Database backup
└── test/                        # Test suites
```

### Frontend React App (`frontend/`)

```
frontend/
├── src/
│   ├── components/
│   │   ├── PatientDashboard.js     # Patient portal
│   │   ├── ProviderDashboard.js    # Healthcare provider portal
│   │   ├── ContributorDashboard.js # Contributor governance portal
│   │   ├── ClaimEngine.js         # Claim processing UI
│   │   ├── PaymentGateways.js     # Payment management
│   │   ├── MedicalRecordManager.js# Health records
│   │   ├── MFASystem.js          # Multi-factor auth
│   │   └── NotificationCenter.js # Notifications
│   ├── utils/
│   │   ├── browserCompatibility.js# Cross-browser support
│   │   ├── accessibility.js      # a11y utilities
│   │   └── performance.js        # Performance monitoring
│   └── App.js                    # Main app component
├── public/
│   ├── sw.js                     # Service worker
│   └── manifest.json             # PWA manifest
└── nginx.conf                    # Nginx config for production
```

---

## 📡 API Reference

The backend exposes a RESTful API at `http://localhost:5000/api/`. Key endpoints:

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | User login (returns JWT) |
| POST | `/api/auth/register` | User registration |
| POST | `/api/auth/verify` | Token verification |

### Claims
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/claims` | List claims |
| POST | `/api/claims` | Submit new claim |
| GET | `/api/claims/:id` | Get claim details |
| PUT | `/api/claims/:id` | Update claim status |

### Fraud Detection
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/fraud/analysis` | Fraud analysis results |
| POST | `/api/fraud/analyze` | Trigger fraud analysis |
| GET | `/api/fraud/stats` | Fraud detection statistics |

### Premium Adjustments
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/premium-adjustments/patient/:id/plans` | Patient premium plans |
| POST | `/api/premium-adjustments/calculate/:patientId/:planId` | Calculate adjustment |
| GET | `/api/premium-adjustments/governance/pending` | Pending reviews |
| POST | `/api/premium-adjustments/governance/:id/review` | Submit review |

### Payments
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/payments` | Payment history |
| POST | `/api/payments/process` | Process payment |
| GET | `/api/payments/balance` | Check token balances |

### Full API documentation is available in the source route files.

---

## 💰 Use Cases

### 1. Insurance Premium Drips
```rust
// Create recurring premium payment (Rust contract)
MediChainPlatform::create_premium_drip(
    &env,
    patient_address,
    insurer_address,
    token_address,
    500_i128,       // 5 XLM monthly
    2592000_u64,    // 30 days
);
```

### 2. Contributor Issue Funding
```rust
// Create medical treatment funding request
MediChainPlatform::create_issue(
    &env,
    patient_address,
    IssueType::Surgery,
    "Emergency Surgery".to_string(),
    "Patient needs immediate surgery".to_string(),
    10000_i128,     // 100 XLM
    "QmHash123".to_string(),
    deadline_timestamp,
    3_u32,          // Required approvals
    creator_address,
);
```

### 3. AI Premium Adjustment
```javascript
// Calculate premium adjustment (Backend API)
const response = await fetch('/api/premium-adjustments/calculate/123/456', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ effectiveDate: '2024-12-01' })
});
const adjustment = await response.json();
console.log('New Premium:', adjustment.newPremium);
console.log('AI Confidence:', adjustment.aiScore);
```

### 4. Frontend Wallet Integration
```typescript
// Connect Freighter wallet
import { SorobanRpc, Contract, Address } from "@stellar/stellar-sdk";

const rpc = new SorobanRpc.Server("https://soroban-testnet.stellar.org");
const contract = new Contract(contractAddress);

const wallet = window.freighter;
const publicKey = await wallet.getPublicKey();

// Call contract
const result = await contract.call("create_premium_drip", [
    patientAddress.toScVal(),
    insurerAddress.toScVal(),
    tokenAddress.toScVal(),
    ScVal.scvI128(premiumAmount),
    ScVal.scvU64(interval),
]);
```

---

## 🧪 Testing

### Run All Tests
```bash
# Rust contract tests
cargo test

# Backend API tests
cd backend && npm test

# Frontend tests
cd frontend && CI=true npm test -- --watchAll=false
```

### Test Coverage
- ✅ Contract initialization and role management
- ✅ Premium drip creation, processing, and cancellation
- ✅ Multi-token support and DEX integration
- ✅ Contributor verification (KYC, license, reputation)
- ✅ Issue management and governance workflow
- ✅ Fraud detection and risk scoring
- ✅ Premium adjustment calculation and limits
- ✅ Access control and permission enforcement
- ✅ Error handling and edge cases

---

## 🚀 Deployment

### Local Development
```bash
# Start all services
cd backend && npm run dev    # API on :5000
cd frontend && npm start     # UI on :3000
```

### Docker Deployment
```bash
# Build images
docker build -t medichain-backend ./backend
docker build -t medichain-frontend ./frontend

# Run containers
docker run -d -p 5000:3000 medichain-backend
docker run -d -p 80:80 medichain-frontend
```

### Kubernetes Deployment
```bash
# Apply manifests
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml
kubectl apply -f k8s/ingress.yaml
kubectl apply -f k8s/hpa.yaml
```

### Stellar Testnet Deployment
```bash
# Deploy contract
bash scripts/deploy.sh

# Verify deployment
soroban contract invoke \
  --id <CONTRACT_ID> \
  --source $SECRET_KEY \
  --network testnet \
  -- get_admin
```

### CI/CD Pipeline
The repository includes a comprehensive [CI/CD pipeline](.github/workflows/ci-cd.yml) with:
- Automated Rust WASM builds and testing
- Security scanning (Trivy, npm audit, cargo audit)
- Code quality checks (ESLint, Clippy)
- Performance benchmarking and Lighthouse audits
- Multi-environment deployment (dev → staging → production)
- Rollback support with deployment manifest management
- Slack notifications and GitHub issue creation on failures

---

## 🔒 Security

### Authentication & Authorization
- **JWT-based authentication** with refresh tokens
- **Role-based access control** (Patient, Provider, Admin, Insurer)
- **Multi-factor authentication** support
- **Session management** with timeout

### Data Protection
- **End-to-end encryption** for sensitive data
- **HIPAA-compliant** data handling
- **Secure file upload** with validation
- **Audit logging** for all data access

### API Security
- **Rate limiting** (100 requests/15min per IP)
- **Input validation** and sanitization
- **CORS configuration** with allowed origins
- **Security headers** (Helmet.js)
- **SQL injection prevention** with parameterized queries

### Blockchain Security
- **Native multi-signature** on Stellar
- **Role-based access** in smart contracts
- **Atomic operations** guaranteeing transaction integrity
- **Time-locks** for critical operations
- **Bounded execution** preventing infinite loops

---

## 🗺️ Roadmap

### ✅ Completed
- [x] Stellar/Soroban smart contract development
- [x] Multi-token premium support with DEX integration
- [x] AI-driven fraud detection and premium adjustments
- [x] Contributor governance and reputation system
- [x] Enhanced KYC/contributor verification
- [x] Comprehensive testing suite
- [x] Modern React frontend with responsive design
- [x] Kubernetes deployment manifests
- [x] CI/CD pipeline with automated testing

### 🔄 In Progress
- [ ] Testnet deployment and validation
- [ ] Mobile app development
- [ ] Healthcare partnership integrations

### 📅 Planned
- [ ] Mainnet deployment
- [ ] DeFi integrations
- [ ] Cross-chain support (Ethereum, Polygon)
- [ ] IoT health monitoring integration
- [ ] Advanced analytics dashboard
- [ ] API for third-party developers

---

## 🤝 Contributing

[![Contributing Guide](https://img.shields.io/badge/Contributing-Guide-blue.svg)](docs/CONTRIBUTING.md)
[![CI Status](https://github.com/sandrawillow001-afk/medichain-platform/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/sandrawillow001-afk/medichain-platform/actions/workflows/ci-cd.yml)

We welcome contributions from the community!

### Development Flow
1. Fork this repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Implement your changes with tests
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Governance
Contributors earn reputation points and HCT token rewards for approved contributions. See [docs/CONTRIBUTOR-GUIDE.md](docs/CONTRIBUTOR-GUIDE.md) for details.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **GitHub**: [github.com/sandrawillow001-afk/medichain-platform](https://github.com/sandrawillow001-afk/medichain-platform)
- **Stellar Docs**: [soroban.stellar.org/docs](https://soroban.stellar.org/docs/)
- **Soroban SDK**: [github.com/stellar/rs-soroban-sdk](https://github.com/stellar/rs-soroban-sdk)
- **Freighter Wallet**: [freighter.app](https://freighter.app/)
- **Stellar Laboratory**: [laboratory.stellar.org](https://laboratory.stellar.org/)

---

## 🙏 Acknowledgments

- **Stellar Development Foundation** for the Soroban platform
- **Stellar Community** for support and feedback
- **All contributors** for making healthcare accessible through blockchain technology

---

<p align="center"><strong>Built with ❤️ for the future of healthcare insurance</strong></p>
