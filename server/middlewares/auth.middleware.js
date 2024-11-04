import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
export const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ msg: "No token provided" });
    }
    const jwtToken = req.headers.authorization.replace("Bearer ", "");
    // console.log(jwtToken);
    if (!jwtToken) {
      return res.status(401).json({ msg: "No token provided" });
    } else {
      try {
        const isVerified = jwt.verify(jwtToken, process.env.SECRET_KEY);
        // console.log(isVerified);
        const userData = await User.findOne({ email: isVerified.email }).select(
          { password: 0 }
        );
        // console.log(userData);
        req.user = userData;
        req.token = jwtToken;
        req.userID = userData._id;
      } catch (error) {
        return res.status(401).json({ msg: "Invalid token" });
      }
    }
    next();
  } catch (error) {
    next({ status: error.status, message: error.message });
  }
};
