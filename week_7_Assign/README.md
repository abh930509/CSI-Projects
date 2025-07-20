# JWT Authentication API – Week 7 Assignment

A minimal RESTful API built using **Node.js**, **Express**, and **JWT** for authentication. It showcases basic user authentication and protected CRUD operations using in-memory storage.

---

## Features

- 🔐 Register & Login using JWT
- 🔒 Middleware-protected routes
- 🔧 In-memory storage (can be upgraded to MongoDB)
- 🔑 Token expiry: 1 hour
- 🧂 Password hashing with bcrypt

---

## Folder Structure

week7-jwt-auth-api/

- ├── routes/
- │ ├── auth.js
- │ └── products.js
- ├── middleware/
- │ └── authMiddleware.js
- ├── server.js
- └── package.json

## API Endpoints

### Auth Routes

| Endpoint             | Method | Description         |
| -------------------- | ------ | ------------------- |
| `/api/auth/register` | POST   | Register a new user |
| `/api/auth/login`    | POST   | Login and get token |

## Protected Product Routes

- Header required: Authorization: Bearer <token>

| Endpoint        | Method | Description        |
| --------------- | ------ | ------------------ |
| `/api/products` | GET    | Get all products   |
| `/api/products` | POST   | Create new product |

## Testing Tips

- Use Postman or Thunder Client:

- Register a user

- Login to receive a token

- Use the token in headers

- Access protected routes

# Tech Stack

- Node.js

- Express.js

- JWT

- crypt

# Notes

- Uses in-memory arrays for users and products

- Replace with MongoDB + Mongoose in production

- Tokens expire after 1 hour
