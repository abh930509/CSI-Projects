const mongoose = require("mongoose");

// Define the schema for inventory items
const ItemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true, // Removes extra spaces
    },
    itemQuantity: {
      type: Number,
      default: 1,
      min: 0, // Quantity can't be negative
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Export the model
module.exports = mongoose.model("Item", ItemSchema);
