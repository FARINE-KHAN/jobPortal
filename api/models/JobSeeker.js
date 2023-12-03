const mongoose = require("mongoose");

const jobSeekerSchema = new mongoose.Schema(
  {
    fullName:{
        type:String,
        required:true
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    dob:{
        type:Date,
        required:true
    },
    deleteAcc: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Jobseeker", jobSeekerSchema);