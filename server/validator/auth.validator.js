import { z } from "zod";
  

export const loginSchema = z.object({
  email: z
    .string({ required_error: " Email is required" })
    .trim()
    .email({ message: "Please enter a valid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must not exceed 255 characters" }),
  password: z
    .string({ required_error: " Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(255, { message: "Password must not exceed 255 characters" }),
});

export const signUpSchema = loginSchema.extend({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name must not exceed 255 characters" }),
});

