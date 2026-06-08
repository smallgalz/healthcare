# Contributing to Healthcare Drips

Thanks for taking the time to contribute. This guide covers everything you need — from filing a bug to shipping a pull request.

---

## Table of contents

- [Code of conduct](#code-of-conduct)
- [How to contribute](#how-to-contribute)
  - [Reporting bugs](#reporting-bugs)
  - [Requesting features](#requesting-features)
  - [Submitting a pull request](#submitting-a-pull-request)
- [Development setup](#development-setup)
- [Project structure](#project-structure)
- [Coding standards](#coding-standards)
- [Testing](#testing)
- [CI/CD pipeline](#cicd-pipeline)
- [Contribution rewards](#contribution-rewards)
- [Security policy](#security-policy)
- [Getting help](#getting-help)

---

## Code of conduct

All contributors are expected to be respectful and professional. We follow a simple rule: treat others as you would want to be treated. Harassment, discrimination, or abusive behaviour of any kind will not be tolerated.

---

## How to contribute

### Reporting bugs

1. Search [existing issues](../../issues) first — your bug may already be reported.
2. If not, open a new issue using the **Bug Report** template.
3. Include:
   - Steps to reproduce
   - Expected vs actual behaviour
   - Browser, wallet, and OS versions
   - Screenshots or logs where applicable

### Requesting features

1. Open a new issue using the **Feature Request** template.
2. Describe the use case clearly — what problem does this solve?
3. Explain why it belongs in the core platform vs a plugin or fork.

### Submitting a pull request

1. Fork the repo and create your branch off `main` (see [Development setup](#development-setup)).
2. Make your changes with appropriate tests.
3. Run the full test suite locally before pushing.
4. Open a PR against `main` using the template below.
5. Add at least one reviewer and respond to feedback promptly.
6. PRs that pass CI checks and review will be merged.

**PR description template:**

```markdown
## What does this change?
<!-- Short description of what you changed and why -->

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Refactor / performance improvement
- [ ] Other: ___

## How was it tested?
<!-- Describe how you tested this locally -->

## Checklist
- [ ] Tests pass locally (`npm test`)
- [ ] Code follows existing style (ESLint clean)
- [ ] Self-reviewed before requesting review
- [ ] Documentation updated if needed
- [ ] No secrets or private keys committed
```

---

## Development setup

### Prerequisites

| Tool | Version | Notes |
|------|---------|-------|
| Node.js | ≥ 18 | [nodejs.org](https://nodejs.org/) |
| npm | ≥ 9 | Bundled with Node.js |
| Rust + cargo | stable | Required for Soroban contract |
| MetaMask | Latest | For Ethereum DApp testing |
| Ganache | Latest | Local Ethereum node |
| Redis | 7.x | Optional — falls back to in-memory cache |

### 1. Clone and install

```bash
git clone https://github.com/<your-org>/healthcare-drips.git
cd healthcare-drips

# Backend
cd backend
cp .env.example .env   # fill in your values
npm install

# React frontend
cd ../Web-client
npm install
```

### 2. Start the backend

```bash
cd backend
npm run dev   # nodemon, hot-reload on port 5000
```

### 3. Deploy the Solidity contract (local)

```bash
# Start Ganache, then in Remix IDE:
# 1. Paste HealthCare.sol
# 2. Select "Injected Provider" (MetaMask → Ganache)
# 3. Deploy with Lab Admin address as constructor arg
# 4. Copy deployed address into Web-client/src/HealthCare.js
```

### 4. Start the React frontend

```bash
cd Web-client
npm start   # opens http://localhost:3000
```

### 5. Build the Soroban contract (optional)

```bash
# From repo root
cargo build --target wasm32v1-none --release
# Output: target/wasm32v1-none/release/healthcare_drips.wasm
```

---

## Project structure

```
healthcare-drips/
├── Web-client/          # React frontend (Ethereum DApp)
├── backend/             # Node.js / Express REST API
│   ├── routes/          # Route handlers
│   ├── services/        # Business logic
│   ├── middleware/      # Auth, rate-limit, audit, zero-trust
│   ├── blockchain/      # Ethereum & Stellar helpers
│   └── database/        # SQLite schema, migrations, backups
├── src/                 # Soroban (Stellar) contract — Rust
├── docs/                # Guides, API docs, contributor resources
├── scripts/             # Deploy & pipeline helper scripts
├── .github/
│   ├── workflows/       # CI/CD (GitHub Actions)
│   └── ISSUE_TEMPLATE/  # Bug / feature / contributor templates
└── k8s/                 # Kubernetes manifests
```

---

## Coding standards

### JavaScript / Node.js (backend & frontend)

- ES6+ — use `const`/`let`, arrow functions, async/await.
- ESLint is configured — run `npx eslint .` before committing.
- Add JSDoc comments to exported functions.
- Keep route handlers thin; put logic in `services/`.
- Never hard-code secrets — use environment variables.

### Solidity

- Target Solidity `^0.8.0`.
- Follow [OpenZeppelin](https://docs.openzeppelin.com/) patterns.
- Add NatSpec (`/// @notice`, `/// @param`, `/// @return`) to all public functions.
- Run `npx hardhat test` before submitting.

### Rust / Soroban

- Follow standard `cargo fmt` and `cargo clippy` — the CI will fail if either has warnings.
- Document public functions with `///` doc comments.

### Commit messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add fraud detection middleware
fix: correct JWT refresh token expiry
docs: update contributor guide
chore: upgrade express to 4.19.x
```

---

## Testing

### Backend

```bash
cd backend
npm test                   # run all tests once
npm run test:coverage      # with coverage report
```

Tests live alongside the code they test or in a `__tests__/` folder.

### Smart contracts (Solidity)

```bash
npx hardhat test
npx hardhat test test/YourTest.test.js   # single file
```

### Rust contract

```bash
cargo test
```

### Frontend

```bash
cd Web-client
CI=true npm test -- --watchAll=false
```

---

## CI/CD pipeline

Every push and pull request against `main` or `develop` runs the full pipeline automatically:

| Job | What it does |
|-----|-------------|
| `rust-build` | Compiles the Soroban WASM contract |
| `security-scan` | Trivy, npm audit, cargo-audit, detect-secrets |
| `lint-and-format` | ESLint (JS), Clippy (Rust) |
| `backend-test` | Jest test suite + coverage |
| `backend-performance` | Autocannon benchmarks |
| `web-client-build` | React build + Lighthouse audit |
| `documentation` | JSDoc + cargo doc generation |
| `deploy-*` | Auto-deploy to dev/staging; manual gate for production |

PRs must pass all critical jobs (`security-scan`, `backend-test`) before merging.

Deployment targets:
- `develop` branch → **development** environment
- `main` branch → **staging** environment
- Manual workflow dispatch → **production** environment (with approval gate)

---

## Contribution rewards

Meaningful contributions are rewarded with **HCT (Healthcare Contributor Token)** on the Stellar network.

### Reward tiers

| Tier | Contributions | Tokens per approval |
|------|--------------|---------------------|
| 🥉 Junior | 1–5 | 10 HCT |
| 🥈 Intermediate | 6–15 | 25 HCT |
| 🥇 Senior | 16–30 | 50 HCT |
| 🏅 Expert | 31–50 | 100 HCT |
| 🎖️ Master | 51+ | 200 HCT |

### Bonus rewards

| Achievement | Bonus |
|------------|-------|
| Monthly top contributor | +1,000 HCT |
| Security vulnerability disclosed | +500 HCT |
| Exceptional review quality | +500 HCT |
| Mentoring a new contributor | +200 HCT |
| Platform improvement accepted | +2,000 HCT |

Contribution types that count: code, bug reports, documentation improvements, community support, and security findings.

---

## Security policy

- **Never** commit private keys, JWT secrets, or wallet seed phrases. The CI runs `detect-secrets` on every push.
- **Never** open a public issue for a security vulnerability.
- To report a security issue, email **security@healthcare-drips.com** with a clear description and reproduction steps. You will receive a response within 48 hours.
- All security findings are eligible for HCT bug bounty rewards.

---

## Getting help

- **GitHub Issues** — bugs, features, questions about the codebase
- **GitHub Discussions** — broader architectural questions and ideas
- **Discord** — real-time chat with the team and community: [discord.gg/healthcare-drips](https://discord.gg/healthcare-drips)
- **Security issues only** — security@healthcare-drips.com

---

By contributing, you agree that your work will be licensed under the [MIT License](../LICENSE).
