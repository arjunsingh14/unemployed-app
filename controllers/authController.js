import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const userAlreadyExists = User.findOne({ email });
  if (userAlreadyExists === null) {
    console.log('exists')
    throw new BadRequestError("The email is already registered");
  }
  const user = await User.create({ name, password, email });
  const token = user.createJWT();
  res
    .status(StatusCodes.CREATED)
    .json({
      user: {
        name: user.name,
        lastName: user.lastName,
        location: user.location,
        email: user.email,
      },
      token,
      location: user.location,
    });
};
const login = async (req, res) => {
  res.send("login");
};
const updateUser = async (req, res) => {
  res.send("update");
};

export { register, login, updateUser };
