const express = require("express");
const router = express.Router();
const { ProductController } = require("../controllers");

router.get("/get-all-products", ProductController.getAllProducts);

module.exports = router;
