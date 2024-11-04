import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { authRouter } from "./routers/auth.router.js";
import { connectDb } from "./config/db.js";
import { contactRouter } from "./routers/contact.router.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";
import { userRouter } from "./routers/user.route.js";
import { adminRouter } from "./routers/admin.router.js";
import { serviceRoutes } from "./routers/services.router.js";

const app = express();
const PORT = process.env.PORT || 5000;
const coreOptions = {
  origin: `http://localhost:5175`,
  methods: ["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
};

app.use(express.static("uploads"));
app.use(cors(coreOptions));
app.use(cookieParser());
app.use(express.json());
app.use(authRouter);
app.use(contactRouter);
app.use(userRouter);
app.use(adminRouter);
app.use(serviceRoutes);

app.use(errorMiddleware);
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
  });
});
