const express = require("express");
const app = express();

const productRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");

// Middleware
app.use(express.json());

// Route Middlewares
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// Server Listening
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
