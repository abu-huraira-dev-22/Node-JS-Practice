const { errorResponse, successResponse } = require("../helperFunctions/responseHandler");
const Users = require("../models/UserSchema");

const signupController = async (req, res) => {
  const { email, userName, password } = req.body;
  console.log(email, userName, password, "==>> details");
  if (!email || !userName || !password) {
    return errorResponse(400, false, "All Fields are required", [], res);
  }
  if (password.length < 8)
    return errorResponse(
      400,
      false,
      "Password should be minimum 8 characters long",
      [],
      res,
    );

  try {
    const userRecord = new Users({
      email: email,
      password: password,
      userName: userName,
    });
    await userRecord.save();
    return successResponse(200, true, "User Signedup Successfully", [], res);
  } catch (error) {
    return errorResponse(400, false, error.message, [], res);
  }
};

module.exports = signupController