const mongoose = require("mongoose");

const productScheema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  Category: {
    type: String,
    required: [true, "Please Enter Product Category"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Now exporting product model

module.exports = mongoose.model("Product", productScheema);
