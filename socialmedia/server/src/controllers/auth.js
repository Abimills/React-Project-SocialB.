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
// get all users
export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ success: false, message: "User not found" });
    } else {
      res.status(200).json({
        success: true,
        message: "Successfully fetched user",
        user: user,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};
// get all users
export const getFriends = async (req, res) => {
  const { ids } = req.body;
  try {
    const users = await User.find({ _id: ids });
    const refinedUser = users.map((item) => {
      return {
        id: item._id,
        firstName: item.firstName,
        lastName: item.lastName,
        photo: item.photo,
      };
    });

    if (!users) {
      res.status(404).json({ success: false, message: "Users not found" });
    } else {
      res.status(200).json({
        success: true,
        message: "Successfully fetched users",
        users: refinedUser,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};
// add friends
export const addFriends = async (req, res) => {
  const { personId, userId } = req.body;
  try {
    const user = await User.findById(userId);

    const found = user.friends.find((friend) => friend == personId);
    if (!found) {
      await User.updateOne(
        { _id: userId },
        {
          $push: { friends: personId },
        }
      );
      const newUser = await User.findById(userId);
      res.status(200).json({
        success: true,
        friends: newUser.friends,
        message: "added a friend",
      });
    } else {
      await User.updateOne(
        { _id: userId },
        {
          $pull: { friends: personId },
        }
      );
      const newUser = await User.findById(userId);
      res.status(200).json({
        success: true,
        friends: newUser.friends,
        message: "removed someone",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};
