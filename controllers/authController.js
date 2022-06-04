import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../errors/index.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    console.log("exists");
    throw new BadRequestError("The email is already registered");
  }
  const user = await User.create({ name, password, email });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
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
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values");
  }
  const user = await User.findOne({ email }).select("+password");
  console.log(user)
  if (!user) {
    throw new UnauthenticatedError("email/password is incorrect");
  }
  const isMatch = await user.comparePassword(password);
  console.log(isMatch)
  if (isMatch) {
    const token = user.createJWT()
    user.password = undefined;
    res.status(StatusCodes.OK).json({user, token, location: user.location})
    res.json("login");
  } else {
    throw new UnauthenticatedError("email/password is incorrect");
  }
};
const updateUser = async (req, res) => {
  res.send("update");
};

export { register, login, updateUser };
