import userProfileModel from "../../models/JobSeeker/userProfile.js";
import bcrypt from "bcrypt";
export const createNewUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName) {
      return res.status(400).json({ msg: "Please provide first name" });
    }
    if (!lastName) {
      return res.status(400).json({ msg: "Please provide last name" });
    }
    if (!email) {
      return res.status(400).json({ msg: "Please provide email" });
    }
    let dupEmail = await userProfileModel.findOne({ email });
    if (dupEmail) {
      return res.status(400).json("Email address is already exists");
    }
    if (!password) {
      return res.status(400).json({ msg: "Please provide password" });
    }
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    const userData = await userProfileModel.create(req.body);
    res.status(201).json("data inserted");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const fetchAllUser = async (req, res) => {
  try {
    const getuser = await userProfileModel.find();
    res.status(200).json(getuser);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const fetchOneUser = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
