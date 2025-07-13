require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Import Routes
const itemRoutes = require("./routes/items");

// Middleware
app.use(express.json()); // Parse JSON request bodies

// API Routes
app.use("/api/items", itemRoutes);

// Connect to MongoDB and Start Server
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(" Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(` Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err.message);
    process.exit(1); // Exit process with failure
  });
