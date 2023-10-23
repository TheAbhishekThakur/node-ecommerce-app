const { User } = require("../models");

const signup = (req, res, next) => {
  console.log("signup", req.body);
  res.status(200).send("Signup successfully");
};
const login = (req, res, next) => {
  console.log("login", req.body);
  res.status(200).send("Login successfully");
};
module.exports = {
  signup,
  login,
};
