import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const registerController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.status(400).json({ msg: "Email already exist" });
    } else {
      const userCreated = await User.create({
        name,
        email,
        password,
      });

      const token = jwt.sign(
        {
          _id: userCreated._id.toString(),
          email: userCreated.email,
          isAdmin: userCreated.isAdmin,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: "30d",
        }
      );
      const userID = userCreated._id.toString();
      res
        .status(201)
        .json({ msg: "Registration successful", token, userID });
    }
  } catch (error) {
    next({ message: error.message, status: error.status });
  }
};

export const loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existUser = await User.findOne({ email });
    if (!existUser) {
      return res.status(400).json({ msg: "User not found" });
    } else {
      const isPasswordValid = await bcrypt.compare(
        password,
        existUser.password
      );
      if (isPasswordValid) {
        const token = jwt.sign(
          {
            _id: existUser._id.toString(),
            email: existUser.email,
            isAdmin: existUser.isAdmin,
          },
          process.env.SECRET_KEY,
          {
            expiresIn: "30d",
          }
        );

        const userID = existUser._id.toString();
        res.status(200).json({ msg: "Login successful", token, userID });
      } else {
        next({ message:"Enter valid password" , status: err.status });
      }
    }
  } catch (error) {
    next({ message:"Enter valid email or password", status: error.status });
  }
};

export const userController = async (req, res) => {
  try {
    const userData = req.user;
    res.status(200).json(userData);
  } catch (error) {
    next({ status: error.status, message: "Error from userController" });
  }
};
