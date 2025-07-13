# 🚀 User Management RESTful API

A simple and lightweight RESTful API built using **Node.js** and **Express.js** that performs basic **CRUD operations** on a `users` resource. It uses in-memory storage (no database) and serves as a great starting point for beginners to learn backend API development.

---

## 🔧 Features

- 📥 Create a new user (`POST /users`)
- 📄 Get all users (`GET /users`)
- 🔍 Get a single user by ID (`GET /users/:id`)
- ✏️ Update a user (`PUT /users/:id`)
- ❌ Delete a user (`DELETE /users/:id`)
- 📦 JSON-based requests and responses
- ✅ RESTful and developer-friendly

---

## 🚀 Getting Started

### 📦 Install Dependencies

```bash
npm install
```

### ▶️ Run the Server

```bash
npm start
# or if you're using nodemon
npx nodemon server.js
```

---

## 📬 API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| POST   | `/users`     | Create a new user |
| GET    | `/users`     | Get all users     |
| GET    | `/users/:id` | Get user by ID    |
| PUT    | `/users/:id` | Update user by ID |
| DELETE | `/users/:id` | Delete user by ID |

---

## 🧪 Sample JSON Payload

### ➕ Create a User (POST `/users`)

```json
{
  "name": "Abhishek Giri",
  "email": "abhishek@example.com"
}
```

---

## 🧾 API Response Format

```json
{
  "status": "success",
  "message": "User created successfully.",
  "data": {
    "id": 1,
    "name": "Abhishek Giri",
    "email": "abhishek@example.com"
  },
  "timestamp": "2025-07-13T14:25:32.112Z"
}
```

---

## 🧰 Technologies Used

- Node.js
- Express.js
- CORS
- JavaScript (ES6+)

---

## 🧠 Learnings

✅ REST API fundamentals  
✅ Routing and HTTP methods  
✅ JSON request/response handling  
✅ Middleware and status codes  
✅ Input validation (basic)

---

## ✨ Future Enhancements

- Connect to a real database (MongoDB/MySQL)
- Add JWT-based authentication
- Modularize with MVC structure
- Input validation using express-validator
- Add testing with Jest/Postman/Newman

---

## 🧑‍💻 Author

**Abhishek Giri**  
_Developer & Intern at Celebal Technologies_
