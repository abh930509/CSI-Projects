const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authMiddleware");

let products = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
  },
];

router.get("/", authenticateToken, (req, res) => {
  res.json(products);
});

router.post("/", authenticateToken, (req, res) => {
  const { name, price } = req.body;

  // Basic validation
  if (!name || !price) {
    return res.status(400).json({ message: "Name and price are required." });
  }

  const newProduct = {
    id: Date.now(),
    name,
    price,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
