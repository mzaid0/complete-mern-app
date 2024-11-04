import { User } from "../models/user.model.js";
import { Contact } from "../models/contact.model.js";
import multer from "multer";
import path from "path";
import { Service } from "../models/service.model.js";
export const getAllUsersController = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (users.length === 0) {
      return res.status(404).json({ msg: "No users found" });
    }
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const getAllContactController = async (req, res) => {
  try {
    const allContacts = await Contact.find();
    if (allContacts.length === 0) {
      return res.status(404).json({ msg: "No contacts found" });
    }
    res.status(200).json(allContacts);
  } catch (error) {
    next(error);
  }
};

export const getOneUsersController = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    if (!data) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const deleteUsersController = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const updateController = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUser = req.body;
    const updatedData = await User.updateOne(
      { _id: id },
      {
        $set: updateUser,
      }
    );
    res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

export const deleteContactsController = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    res.status(200).json({ msg: "Contact deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      console.log("this.destination");
      cb(null, "../server/uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  }),
});

export const addServicesController = async (req, res) => {
  // console.log("dppo");
  try {
    const { title, description } = req.body;
    const image = req.file;
    const imagePathArray = image.path.split('\\');
console.log(imagePathArray);
    const serviceData = await Service.create({
      title,
      description,
      image:imagePathArray[imagePathArray.length - 1],
    });
    if (serviceData) {
      console.log(serviceData);
      res.status(200).json({ msg: "Service added successfully" });
    } else {
      res.status(400).json({ msg: "Something went wrong" });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong in this api" });
  }
};
