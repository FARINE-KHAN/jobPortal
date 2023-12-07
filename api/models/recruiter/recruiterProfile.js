const mongoose = require("mongoose");

const recruiterProfileSchema = new mongoose.Schema(
  {
    numberEmployees: {
      type: String, //dropdown
      enum: ["1-14", "15-49", "50-100", "100-200", "200-500", "500 and above"],
    },
    companyName: {
      type: String,
    },
    industry: {
      type: String, //dropdown (api)
    },
    yourDesignation: {
      type: String,
    },
    pincode: {
      type: Number,
    },
    address: {
      type: String,
    },
    aboutCompany: { type: String },
    notification: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RecruiterProfile", recruiterProfileSchema);
