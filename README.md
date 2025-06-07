# 🐉 Hydra

---

## 🔧 Tech Stack

| Layer     | Technology                     |
|-----------|--------------------------------|
| **Frontend** | [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) + TypeScript |
| **Backend**  | [Express.js](https://expressjs.com/) + TypeScript |
| **Database** | [PostgreSQL](https://www.postgresql.org/) |
| **ORM**      | [Prisma](https://www.prisma.io/) |
| **Auth**     | [Passport.js](http://www.passportjs.org/) (role-based access) |
| **Testing**  | [Jest](https://jestjs.io/) (backend) |
| **Containerization** | Docker + Docker Compose |
| **Deployment Target** | [Fly.io](https://fly.io/) *(optional, future)* |

---

## 📁 Project Structure

```
hydra/
├── backend/               # Express API, TypeScript, Prisma, Passport
│   ├── src/
│   ├── prisma/
│   ├── Dockerfile
│   └── tsconfig.json
├── frontend/              # Vite + React + Context API for Auth
│   ├── src/
│   ├── Dockerfile
│   └── vite.config.ts
├── docker-compose.yml     # Spins up backend, frontend, and Postgres
├── .env                   # Used for DATABASE_URL, secrets
├── README.md              # You're here
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <your-repo-url> hydra
cd hydra
```

### 2. Create `.env`

At the root:

```env
# .env
DATABASE_URL=postgres://postgres:postgres@db:5432/hydra
```

> This `.env` file is used by both Docker and Prisma.

---

### 3. Install Dependencies & Generate Prisma Client

```bash
cd backend
npm install
```

This `postinstall` step runs `prisma generate` to create the client.

### 4. Build & Start the App

```bash
docker compose up --build
```

This will:
- Start a Postgres database
- Build and run the **backend API** on [http://localhost:4000](http://localhost:4000)
- Build and serve the **React frontend** on [http://localhost:5173](http://localhost:5173)

---

### 5. Test URLs

- ✅ Backend test: [http://localhost:4000/hello](http://localhost:4000/hello)
- ✅ Frontend test: [http://localhost:5173](http://localhost:5173)

---

## 🔁 Common Docker Commands

| Command | Description |
|--------|-------------|
| `docker compose up --build` | Build and start all services |
| `docker compose down`       | Stop and remove services |
| `docker compose down -v`    | Stop services and delete volumes (Postgres DB reset) |
| `docker compose logs -f`    | Live service logs |
| `docker compose exec backend sh` | Shell into backend container |
| `docker compose exec db psql -U postgres` | Connect to Postgres in container |

---

## 📌 Next Steps (In Progress)

- [ ] Add Prisma schema + database migrations
- [ ] Set up Passport.js auth (login, roles)
- [ ] Implement Homebrew Content system
- [ ] Set up frontend login flow with React Context
- [ ] Add Historical Moments + Adventure linking
- [ ] Deploy via Fly.io