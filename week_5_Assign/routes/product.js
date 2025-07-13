const express = require("express");
const router = express.Router();
const Item = require("../models/item");

// @route   POST /api/items
// @desc    Create a new item
router.post("/", async (req, res) => {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// @route   GET /api/items
// @desc    Get all items
router.get("/", async (req, res) => {
  try {
    const allItems = await Item.find();
    res.json(allItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// @route   PUT /api/items/:id
// @desc    Update an existing item by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// @route   DELETE /api/items/:id
// @desc    Delete an item by ID
router.delete("/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item successfully deleted." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
