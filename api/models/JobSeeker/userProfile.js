const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema(
  {
    userId: { type: ObjectId, ref: "JobSeeker", require: true },
    profileHeading: { type: String }, //bio
    profileLastUpdated: {type: String},  //date
    resume: {type: String},
    address: {
      country: { type: String }, //dropdown
      city: { type: String },
      pincode: { type: Number },
    },
    age: { type: Number }, //autoCalculation
    maritalStatus: { type: String }, //options
    gender: { type: String }, //options
    careerBreak: { type: Boolean }, //options
    reasonForBreak: { type: String }, // if careerBreak = true
    education: {
      education: { type: String }, //dropdown
      collage: { type: String },
      course: { type: String }, //dropdown
      specialization: { type: String }, //dropdown
      courseType: { type: String }, //options
      courseDuration: {
        from: {
          year: { type: String }, //dropdown
          month: { type: String }, //dropdown
        },
        to: {
          year: { type: String }, //dropdown
          month: { type: String }, //dropdown
        },
      },
      grading: { type: String }, //dropdown
      marks: { type: Number },
    },
    currentStatus: { type: String },
    currentCompany: { type: String },
    currentSalary: { type: String },
    currentWorkLocation: { type: String }, //dropdown
    expectedSalary: { type: String }, //dropdown
    currentDesignation: { type: String },
    totalExperience: {
      year: { type: String }, //dropdown
      month: { type: String }, //dropdown
    },
    experience: {
      companyName: { type: String },
      designation: { type: String },
      joiningDate: {
        year: { type: String },
        month: { type: String },
      },
      currentlyWorking: { type: Boolean }, // options
      annualSalary: { type: Number }, //dropdown
      employmentType: { type: String }, //options
      skillsUsed: { type: String },
      description: { type: String },
      noticePeriod: { type: String }, //dropdown
    },
    skills: { type: String },
    projects: {
      projectTitle: { type: String },
      projectStatus: { type: String, enum: ["In-progress", "Completed"] }, //options
      workedFrom: {
        year: { type: String }, //dropdown
        month: { type: String }, //dropdown
      },
      workedTill: {
        year: { type: String }, //if workedFrom is "completed"
        month: { type: String },
      },
      details: { type: String },
      skillsUsed: { type: String },
    },
    profileSummary: { type: String },
    links: {
      title: { type: String },
      url: { type: String },
    },
    certificates: {
      certificateName: {type: String},
      certificateId: {type: String},
      certificateUrl: { type: String },
    },
    languages: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserProfile", userSchema);
