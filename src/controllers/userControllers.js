const Users = require("../models/UserMode");
const jwt = require("jsonwebtoken");

const getUsersController = async (req, res) => {
  let query = {};
  if (req.query.ageStart && req.query.ageEnd) {
    const queryFlag = { ...req.query };
    delete queryFlag.ageStart;
    delete queryFlag.ageEnd;

    query = {
      ...queryFlag,
      age: { $gte: req.query.ageStart, $lte: req.query.ageEnd },
    };
  }

  const users = await Users.find();

  res.json({
    status: true,
    message: "All Users Fetched Successfully",
    data: users,
  });
};

const updateUserController = async (req, res) => {
  try {
    const updateDetails = req.body;

    const token = req.headers.authorization.split(" ")[1];

    console.log(token, "==>> token");

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    await Users.findByIdAndUpdate(decoded.id, updateDetails);
    res.json({
      status: true,
      message: "User updated Successfully",
    });
  } catch (error) {
    console.log(error.message, "==>>error");
  }
};

module.exports = { getUsersController, updateUserController };
