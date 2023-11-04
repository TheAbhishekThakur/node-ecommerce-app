const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 50,
  },

  desc: {
    type: String,
    required: true,
    unique: true,
    minlength: 10,
    trim: true,
  },

  created_at: {
    type: Date,
    default: new Date(),
    required: true,
  },
  updated_at: {
    type: Date,
    default: new Date(),
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const Products = mongoose.model("Products", productSchema);
module.exports = Products;
