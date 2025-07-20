const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

const users = [];

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Basic validation
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });

  res.json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = users.find((u) => u.username === username);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ username: user.username }, "secret123", {
    expiresIn: "1h",
  });

  res.json({ token });
});

module.exports = router;
