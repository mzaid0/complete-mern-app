import { Router } from "express";
import { contactController } from "../controllers/contact.controller.js";

export const contactRouter = Router();

contactRouter.route("/contact").post(contactController)