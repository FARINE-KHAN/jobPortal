const mongoose = require("mongoose");

const jobSeekerSchema = new mongoose.Schema(
  {
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email: {
      type: String,
      required: true,
    },
    phone:{
      type:Number,
      required:true
    },
    password: {
      type: String,
      required: true,
    },
    dob:{
        type:Date
    },
    deleteAcc: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobSeeker", jobSeekerSchema);