import { Schema, model } from "mongoose";

const serviceSchema = new Schema({
  title: {
    type: String,
    required:true,
  },
  description: {
    type: String,
    required:true,
  },
  image: {
    type: String,
    required: true,
  },
});
export const Service = new model("Service", serviceSchema);
