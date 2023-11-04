const { Products } = require("../models");

const getAllProducts = (req, res, next) => {
  console.log("Product List", req.body);
  res.status(200).send("Product List");
};

module.exports = {
  getAllProducts,
};
