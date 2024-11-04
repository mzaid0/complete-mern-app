import { Contact } from "../models/contact.model.js";

export const contactController = async (req, res,next) => {
  try {
    const response = req.body;
    const newContact = await Contact.create(response);
    res.status(201).json({msg:"Message send successfully ",newContact});
  } catch (error) {
    next({message: error.message,status: error.status})
  }
};
