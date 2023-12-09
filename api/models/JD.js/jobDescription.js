const mongoose = require("mongoose");

const JDSchema = new mongoose.Schema(
  {
    title: { type: String },
    companyName: { type: String }, //autofill
    experience: { type: String }, //dropdown
    salary: { type: String },
    location: { type: String },
    jobType: { type: String }, //dropdown (full-time, part-time, contract)
    contractPeriod: { type: Number }, //dropdown (max-5 years)
    postedDate: { type: Date }, // date
    totalOpening: { type: Number },
    totalApplied: { type: Number }, //autoIncrement
    jobHighlights: { type: String }, //points
    jobDescription: { type: String },
    roleAndResponsibility: { type: String },
    preferredCandidates: { type: String },
    perksAndBenefits: { type: String },
    industryType: { type: String }, //autoFillFrom recruiterProfile
    Department: { type: String },
    roleCategory: { type: String },
    keySkills: { type: String }, //array list,
    aboutCompany: { type: String }, //autofill from recruiterProfile
  },
  { timestamps: true }
);

module.exports = mongoose.model("JobDescription", JDSchema);
