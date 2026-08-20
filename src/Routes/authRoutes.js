const express = require("express");
const {
  successResponse,
  errorResponse,
} = require("../helperFunctions/responseHandler");

const authRouter = express.Router();

// Signup / AddUser
authRouter.post("/signup", (req, res) => {
  const { email, userName, password } = req.body;
  console.log(email, userName, password, "==>> details");
  if (!email || !userName || !password) {
    return errorResponse(400, false, "All Fields are required", [], res);
  }
  return successResponse(200, true, "User Signedup Successfully", [], res);
});

// Login
authRouter.post("/login", (req, res) => {
  return successResponse(200, true, "Login Successfully", [], res);
});

module.exports = authRouter;
