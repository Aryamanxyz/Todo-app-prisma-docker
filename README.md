# 🚀 Todo App Backend (Docker + Prisma + PostgreSQL)

A production-ready Todo REST API built using **Node.js**, **Express**, **Prisma ORM**, **PostgreSQL**, and **Docker**.

---

## 📌 Features

✅ User Authentication (JWT)  
✅ Create, Update, Delete Todos  
✅ Protected Routes  
✅ Prisma ORM Integration  
✅ PostgreSQL Database  
✅ Dockerized Backend  
✅ REST API Architecture  

---

## 🛠 Tech Stack

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- Docker & Docker Compose
- JWT Authentication

## 📂 Project Structure
---├── prisma/
│ ├── schema.prisma
│ └── migrations/
├── src/
│ ├── routes/
│ ├── middleware/
│ ├── prismaClient.js
│ └── server.js
├── public/
├── Dockerfile
├── docker-compose.yaml
├── prisma.config.ts
└── README.md

---

## ⚙️ Environment Variables

Create a `.env` file:
DATABASE_URL=postgresql://postgres:postgres@db:5432/todoapp
JWT_SECRET=your_secret
PORT=5000


---

## 🐳 Run with Docker

```bash
docker compose up --build
http://localhost:5000
📡 API Routes
Auth
Method	Endpoint	Description
POST	/auth/register	Register user
POST	/auth/login	Login user
Todos
Method	Endpoint	Description
GET	/todos	Get all todos
POST	/todos	Create todo
PUT	/todos/:id	Update todo
DELETE	/todos/:id	Delete todo

🧠 Database Models
User

id

username

password

Todo

id

task

completed

userId

🚀 Future Improvements

Frontend Integration (React)

Swagger API Docs

Deployment (Render / AWS)

Refresh Tokens

👨‍💻 Author

Aryaman Chaudhary

GitHub: https://github.com/Aryamanxyz


---




