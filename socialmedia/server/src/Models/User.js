import mongoose from "mongoose";
import validateEmail from "../utils/validateEmail.js";
import validateAllowedFields from "../utils/validateAllowedFields.js";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: true,
    },
    photo: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      max: 255,
      required: [true, "Please Provide an email"],
      validate: [validateEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please Provide a password"],
      minlength: [6, "Minimum password length is 6 characters"],
      select: false,
    },

    job: {
      type: String,
      required: true,
    },
    friends: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "User",
      default: [],
    },
    placeOfResidence: {
      type: String,
      required: true,
    },
    numberOfProfileView: {
      type: Number,
      default: 0,
    },
    impressionsOnProfile: {
      type: Number,
      default: 0,
    },
    twitterAccount: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
  } catch (error) {
    console.log(error);
    return next(error);
  }
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// user register allowed key  verification
export const validateUser = (userObject) => {
  const errorList = [];
  const allowedKeys = [
    "firstName",
    "lastName",
    "email",
    "photo",
    "password",
    "job",
    "twitterAccount",
    "placeOfResidence",
  ];

  const validatedKeysMessage = validateAllowedFields(userObject, allowedKeys);

  if (validatedKeysMessage.length > 0) {
    errorList.push(validatedKeysMessage);
  }

  return errorList;
};

const User = mongoose.model("User", userSchema);

export default User;
