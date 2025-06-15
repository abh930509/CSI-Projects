# Celebal Internship - Node.js Week 2 Project: File System Utility

## 📦 Project Overview

This is a **File System Utility Tool** developed using only **Node.js core modules**. It offers a lightweight solution for performing basic file operations through a browser or any HTTP client.

🔧 No frameworks or third-party libraries were used – just pure Node.js!

---

## ✨ What This Tool Can Do

- 📂 Create a new file with custom content
- 📖 Read and view the content of existing files
- 🧹 Delete unwanted files

All managed files are saved inside a `files/` folder that is automatically generated when the server starts.

---

## 🧱 Built With

- **`http`** – For creating the server and handling requests
- **`fs`** – For creating, reading, and deleting files
- **`path`** – To safely generate file paths
- **`url`** – To parse incoming request URLs and extract parameters

---

## 🚀 Getting Started

### 🔧 Requirements

- Install [Node.js](https://nodejs.org/) (v14 or higher is recommended)

### 📁 Setup Instructions

1. Download or clone this repository.
2. Navigate to the project directory in your terminal.
3. Run the server using the following command:

```bash
npm start


## 🌐 Test the Application

After starting the server, open these links in your browser:

### ➕ Create a file

[http://localhost:4000/create?filename=test.txt&content=HelloWorld](http://localhost:4000/create?filename=test.txt&content=HelloWorld)

### 📄 Read the file

[http://localhost:4000/read?filename=test.txt](http://localhost:4000/read?filename=test.txt)

### 🗑️ Delete the file

[http://localhost:4000/delete?filename=test.txt](http://localhost:4000/delete?filename=test.txt)
```
