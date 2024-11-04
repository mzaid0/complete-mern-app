import mongoose from "mongoose";

const URI = "mongodb://127.0.0.1:27017/MernDb";
export const connectDb = async () => {
  try {
    mongoose.connect(URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting");
  }
};
