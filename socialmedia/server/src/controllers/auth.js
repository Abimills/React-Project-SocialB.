import User, { validateUser } from "../Models/User.js";
import validationErrorMessage from "../utils/validationErrorMessage.js";
import validationSchema from "../utils/validationSchema.js";

// register user ....
export const register = async (req, res) => {
  const userInformation = req.body;

  try {
    const errorList = validateUser(userInformation);

    if (errorList.length > 0) {
      res
        .status(400)
        .json({ success: false, msg: validationErrorMessage(errorList) });
    } else {
      await User.create(userInformation);
      res.status(201).json({
        success: true,
        message: "Successfully created user",
      });
    }
  } catch (error) {
    const errors = validationSchema(error);
    console.log(errors);
    res.status(500).json({
      success: false,
      message: "Something went wrong ",
      error,
    });
  }
};

// login user
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email }).select("+password");
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
    } else {
      const checkPassword = await user.matchPassword(password);
      if (!checkPassword) {
        res.status(400).json({
          success: false,
          message: "Email or Password incorrect",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "User logged In",
          user: user,
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong ",
      error,
    });
  }
};

// get all users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      res.status(404).json({ success: false, message: "Users not found" });
    }
    res.status(200).json({
      success: true,
      counts: users.length,
      message: "Successfully fetched all users",
      users: users,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};
