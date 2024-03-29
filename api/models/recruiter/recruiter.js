const mongoose = require("mongoose");

const recruiterSchema = new mongoose.Schema(
  {
    name:{
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
    deleteAcc: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Recruiter", recruiterSchema);