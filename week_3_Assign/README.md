# 📘 Courses Enrolled – Async Refactor Project

This project demonstrates how to modernize legacy callback-based asynchronous code using _Promises_ and _Async/Await_ in Node.js. It simulates a real-world scenario where a student's enrolled courses are retrieved from a data source (enrollments.json file).

## 🎯 Objective

Refactor existing async operations that rely on _callbacks_ into more readable and scalable code using:

- ✅ Promises
- ✅ Async/Await

## 📁 Folder Structure

CoursesEnrolledAsyncRefactor/
├── enrollments.json
├── callback-based.js
├── promises-refactor.js
├── async-await-final.js
├── package.json
└── README.md

## 📚 Data Format

_enrollments.json_ simulates a course enrollment database.

## 🚀 How to Run

Make sure you have _Node.js installed_. Then, from your project folder:

### 1. Install (only needed once):

bash
npm install

### 2. Run different versions:

bash
npm run start:callback
npm run start:promise
npm run start:async

## 🧠 Concepts Demonstrated

| Feature        | Description                                                        |
| -------------- | ------------------------------------------------------------------ |
| fs.readFile    | Used to asynchronously read local JSON data                        |
| Callback Logic | Traditional Node.js async pattern                                  |
| Promises       | Improves readability & control flow                                |
| Async/Await    | Modern ES2017 syntax making async logic look like synchronous code |
| Error Handling | Uses try/catch and .catch() to gracefully manage unexpected errors |

## 👨‍💻 Author

_Abhishek Giri_  
B.Tech CSE | Node.js Developer

## 📜 License

This project is for academic and learning purposes.
