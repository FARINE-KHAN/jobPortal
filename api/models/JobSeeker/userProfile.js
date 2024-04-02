import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    password: {
      type: String,
    },
    dob: {
      type: Date,
    },
    deleteAcc: {
      type: Boolean,
      default: false,
    },
    profileHeading: { type: String }, //bio
    profileLastUpdated: { type: Date }, //date
    resume: { type: String },
    address: {
      country: { type: String }, //dropdown
      city: { type: String },
      pincode: { type: Number },
    },
    age: { type: Number }, //autoCalculation from jobSeeker
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
          year: { type: Date }, //dropdown
          month: { type: Date }, //dropdown
        },
        to: {
          year: { type: Date }, //dropdown
          month: { type: Date }, //dropdown
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
    noticePeriod: { type: String }, //dropdown
    totalExperience: {
      year: { type: Date }, //dropdown
      month: { type: Date }, //dropdown
    },
    experience: [{
      companyName: { type: String },
      designation: { type: String },
      joiningDate: {
        year: { type: Date },
        month: { type: Date },
      },
      currentlyWorking: { type: Boolean }, // options
      annualSalary: { type: Number }, //dropdown
      employmentType: { type: String }, //options
      skillsUsed: { type: String },
      description: { type: String },
     
    }],
    skills: { type: String },
    projects: {
      projectTitle: { type: String },
      projectStatus: { type: String, enum: ["In-progress", "Completed"] }, //options
      workedFrom: {
        year: { type: Date }, //dropdown
        month: { type: Date }, //dropdown
      },
      workedTill: {
        year: { type: Date }, //if workedFrom is "completed"
        month: { type: Date },
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
      certificateName: { type: String },
      certificateId: { type: String },
      certificateUrl: { type: String },
    },
    languages: { type: String },
    userType: { type: String, default: "job-seeker" },
  },
  { timestamps: true }
);

export default mongoose.model("UserProfile", userSchema);
