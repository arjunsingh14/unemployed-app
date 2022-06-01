
import mongoose from "mongoose";
import isEmail from "validator/lib/isEmail.js";
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  lastName: {
    type: String,
    minlength: 3,
    maxlength: 20,
    trim: true,
    default: "last name"
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
        validator: isEmail,
        message: "Please provide a valid email"
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
  },
  location: {
      type: String,
      trim: true,
      maxlength: 30,
      default: "Toronto, ON"

  }
});

export default mongoose.model('User', UserSchema);