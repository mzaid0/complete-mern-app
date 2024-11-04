import { Router } from "express";
import { loginController, registerController } from "../controllers/auth.controller.js";
import { loginSchema, signUpSchema } from "../validator/auth.validator.js";
import { validate } from "../middlewares/validate.middleware.js";

export const authRouter = Router();

authRouter.route("/register").post(validate(signUpSchema),registerController)
authRouter.route("/login").post(validate(loginSchema),loginController)