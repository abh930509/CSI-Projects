# 📁 Node.js File Manager Tool – Celebal Internship Week 2

Welcome!.This is a basic **File Manager Tool** built with **pure Node.js** — no external libraries used. It's a mini backend project that helps you understand how Node.js works under the hood by performing simple file operations through HTTP routes..

---

## 🔍 What This Project Does

This tool lets you:

- ➕ **Create** a new file with custom content
- 📄 **Read** the contents of a file
- 🗑️ **Delete** an existing file

All your files are safely handled and stored inside a folder named `files`, which gets created automatically when the server runs.

---

## 🧱 Technologies Used

We’re using only Node.js core modules:

- `http` – to build the web server
- `fs` – to handle file system operations like create, read, delete
- `path` – to manage file paths securely
- `url` – to extract information from the request URL (like file name & content)

---

## 🚀 Getting Started

### ✅ What You Need

- Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

---

### ▶️ Steps to Run This Project

1. **Download or clone** this repository to your system.
2. Open your terminal or command prompt and go to the project folder.
3. Start the server by running:

- bash
- npm start

("If you're using nodemon, run npm run dev instead.")

## 🌐 How to Use It

Once the server is running on http://localhost:8080, you can use your browser or Postman to interact with it.

### ➕ Create a File

Create a new file and add content:
http://localhost:8080/create?filename=myfile.txt&content=HelloWorld

### 📄 Read a File

View the content of an existing file:
http://localhost:8080/read?filename=myfile.txt

### 🗑️ Delete a File

Delete a file from the system:
http://localhost:8080/delete?filename=myfile.txt

## 👨‍💻 Author

s

- Abhishek Giri
- Backend Intern – Celebal Technologies
