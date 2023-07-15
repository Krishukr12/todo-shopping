const mongoose = require("mongoose");

// Todos Schema

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  specification: {
    type: Boolean,
    required: true,
  },
});

const todoModel = mongoose.model("Todo", todoSchema);

module.exports = CarListing;
