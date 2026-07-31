# MERN Multi-Vendor E-Commerce Platform

A full-stack e-commerce app with three roles (Customer, Seller, Admin), built to
learn the complete MERN stack end-to-end: auth, CRUD, payments, real-time
updates, testing, and cloud deployment.

## Tech Stack

- **Frontend:** React (Vite), React Router, Redux Toolkit, Tailwind CSS, Axios
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT auth
- **Real-time:** Socket.io
- **Payments:** Stripe (to be added)
- **Images:** Cloudinary (to be added)
- **Deployment:** Vercel (client) + Render (server) + MongoDB Atlas

## Project Structure

```
mern-ecommerce/
├── client/          # React frontend (Vite)
├── server/          # Express backend
│   ├── config/      # DB connection
│   ├── controllers/ # Route logic
│   ├── models/      # Mongoose schemas
│   ├── routes/       
│   ├── middleware/  # Auth guards etc.
│   └── utils/       
└── .github/workflows/ci.yml   # CI: install + build/test on every push
```

## Local Setup

### 1. Backend

```bash
cd server
cp .env.example .env   # then fill in MONGO_URI, JWT secrets, etc.
npm install
npm run dev             # runs on http://localhost:5000
```

### 2. Frontend

```bash
cd client
npm install
npm run dev              # runs on http://localhost:5173
```

The Vite dev server proxies `/api/*` requests to `http://localhost:5000`, so
no CORS config is needed locally (see `vite.config.js`).

## Current Features

- [x] JWT auth (access + refresh tokens, httpOnly refresh cookie)
- [x] Role-based access (customer / seller / admin)
- [x] Product CRUD (sellers manage their own products, admin manages all)
- [x] Product search, filtering, pagination
- [x] Socket.io server wired up (events to be added)
- [ ] Cart & checkout
- [ ] Stripe payment integration
- [ ] Cloudinary image uploads
- [ ] Reviews & ratings
- [ ] Seller/admin dashboards
- [ ] Email notifications
- [ ] Tests (Jest + Supertest)
- [ ] Docker + docker-compose
- [ ] Deployment (Vercel + Render + Atlas)

## Deployment (planned)

| Service | Where |
|---|---|
| Database | MongoDB Atlas (free tier) |
| Backend API | Render (Web Service) |
| Frontend | Vercel |

Environment variables must be set in each platform's dashboard — never commit
`.env` files.

## Git Workflow

- `main` — stable, deployable branch
- `feature/*` — one branch per feature, merged via PR
- CI runs automatically on every push/PR (see `.github/workflows/ci.yml`)
