const express = require("express");
const {
  successResponse,
  errorResponse,
} = require("../helperFunctions/responseHandler");
const Users = require("../models/UserSchema");
const signupController = require("../controllers/authControllers");

const authRouter = express.Router();

// Signup / AddUser
authRouter.post("/signup", signupController);

// Login
authRouter.post("/login", (req, res) => {
  return successResponse(200, true, "Login Successfully", [], res);
});

module.exports = authRouter;
