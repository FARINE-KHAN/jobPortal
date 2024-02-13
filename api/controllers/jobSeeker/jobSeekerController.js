import userProfileModel from "../../models/JobSeeker/userProfile.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
import razorpay from "razorpay"
const instance = new razorpay({ key_id: process.env.RAZORPAY_KEY_ID, key_secret: process.env.RAZORPAY_KEY_SECRET })
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

    res.status(201).json(userData);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json("Please provide email");
    }
    if (!password) {
      return res.status(400).json("Please provide password" );
    }
    let getUser = await userProfileModel.findOne({ email });
    if (!getUser)
      return res.status(401).json("Email or Password is incorrect.");

    let matchPassword = await bcrypt.compare(password, getUser.password);
    if (!matchPassword)
      return res.status(401).json("Email or Password is incorrect.");
    
    return res.status(200).json(getUser);
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
    const getOneUser =await userProfileModel.findById(req.params.userId)
    return res.status(200).json(getOneUser)
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

export const paymentgateway = async (req, res) => {
  try {
   const order=await instance.orders.create({
      amount: 50000,
      currency: "INR",
      receipt: "receipt#1",
      notes: {
          key1: "value3",
          key2: "value2"
      }
      })
      console.log(order);
      res.status(200).json(order);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};