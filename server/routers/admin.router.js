import { Router } from "express";
import {
  addServicesController,
  deleteContactsController,
  deleteUsersController,
  getAllContactController,
  getAllUsersController,
  getOneUsersController,
  updateController,
  upload,
} from "../controllers/admin.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";
export const adminRouter = Router();

adminRouter
  .route("/admin/users")
  .get(authMiddleware, adminMiddleware, getAllUsersController);
adminRouter
  .route("/admin/services")
  .post(authMiddleware, adminMiddleware, upload.single("image"), addServicesController);
adminRouter
  .route("/admin/users/:id")
  .get(authMiddleware, adminMiddleware, getOneUsersController);
adminRouter
  .route("/admin/users/update/:id")
  .patch(authMiddleware, adminMiddleware, updateController);
adminRouter
  .route("/admin/users/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteUsersController);
adminRouter
  .route("/admin/contacts")
  .get(authMiddleware, adminMiddleware, getAllContactController);
adminRouter
  .route("/admin/contacts/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteContactsController);
