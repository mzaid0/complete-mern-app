import { Router } from "express";
import { userController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export const userRouter = Router();

userRouter.route('/user').get(authMiddleware,userController)


