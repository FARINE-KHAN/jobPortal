import React, { useEffect, useState } from "react";
import "./profile.css";
import { serverVariables } from "../../../utils/serverVariables";
import { getAPI, useSessionData } from "../../../utils/commonFunctions";
import { Button } from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const Profile = () => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState("");
  let user = useSessionData("user");
  let inputs;

  const getUserData = async () => {
    const res = await getAPI(
      serverVariables.GetJobSeekerDetails + user._id,
      setLoading,
      inputs
    );
    setData(res?.data);
  };
  useEffect(() => {
    getUserData();
  }, []);
  const skillsarr = [
    { name: "HTML", id: 1 },
    { name: "CSS", id: 2 },
    { name: "Nodejs", id: 3 },
    { name: "MongoDB", id: 4 },
    { name: "Reactjs", id: 5 },
    { name: "Reactjs", id: 6 },
    { name: "Reactjs", id: 7 },
    { name: "Reactjs", id: 5 },
    { name: "Reactjs", id: 5 },
    { name: "Reactjs", id: 5 },
    { name: "Reactjs", id: 5 },
    { name: "Reactjs", id: 5 },
  ];
  const rows = [
    {
      key: "1",
      language: "English",
      Proficiency:"good",
      Read:<i className="fa-regular fa-circle-check"></i>,
      Write:<i className="fa-regular fa-circle-check"></i>,
      Speak:<i className="fa-regular fa-circle-check"></i>
    },
    {
      key: "2",
      language: "Hindi",
      Proficiency:"good",
      Read:<i className="fa-regular fa-circle-check"></i>,
      Write:<i className="fa-regular fa-circle-check"></i>,
      Speak:<i className="fa-regular fa-circle-check"></i>
    },
    {
      key: "3",
      language: "Marathi",
      Proficiency:"good",
      Read:<i className="fa-regular fa-circle-xmark"></i>,
      Write:<i className="fa-regular fa-circle-xmark"></i>,
      Speak:<i className="fa-regular fa-circle-check"></i>
    },
    
   

  ];

  const columns = [
    {
      key: "language",
      label: "Language",
    },
    {
      key: "Proficiency",
      label: "Proficiency",
    },
    {
      key: "Read",
      label: "Read",
    },
    {
      key: "Write",
      label: "Write",
    },
    {
      key: "Speak",
      label: "Speak",
    },
  ];
  return (
    <div className="profile">
      {/* ================== Basic Information =========================== */}

      <div className="profile-basic">
        <div className="profile-image">
          <img
            src="https://img.freepik.com/premium-photo/woman-wearing-black-head-scarf_777078-39469.jpg"
            alt="profile-img"
          />
        </div>
        <div className="basic-info">
          <div className="username">
            <div className="username-info mb-2">
              <h1>
                {data?.firstName} {data?.lastName}
                <span>
                  <i className="fa-solid fa-pen"></i>
                </span>
              </h1>
              <h2>Full Stack Developer</h2>
              <h3>
                <span>Company Name</span>
              </h3>
            </div>

            <p>
              <span>Profile Last Updated - </span>Today
            </p>
          </div>
          <div className="basic-details">
            <div className="location">
              <h1>
                <span>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                Mumbai,India
              </h1>
              <h1>
                <span>
                  <i className="fa-solid fa-briefcase"></i>
                </span>
                1 years, 6 months
              </h1>
              <h1>
                <span>
                  <i className="fa-solid fa-wallet"></i>
                </span>
                $ 50,000.
              </h1>
            </div>
            <div className="contact-details">
              <h1>
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
                8668879497
              </h1>
              <h1>
                <span>
                  <i className="fa-regular fa-envelope"></i>
                </span>
                {data?.email}
              </h1>
              <h1>
                <span>
                  <i className="fa-regular fa-calendar"></i>
                </span>
                1 Month Notice Period
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ================== Main Body =========================== */}
      <div className="profile-body">
        <div className="quicklinks">
          <h1>Quick Links</h1>
          <div className="links">
            <div className="items">
              <h2>Resume</h2>
              <button>Update</button>
            </div>
            <div className="items">
              <h2>Resume headline</h2>
              <button>Update</button>
            </div>
            <div className="items">
              <h2>Skills</h2>
              <button>Update</button>
            </div>
            <div className="items">
              <h2>Employment</h2>
              <button>Update</button>
            </div>
            <div className="items">
              <h2>Education</h2>
              <button>Update</button>
            </div>

            <div className="items">
              <h2>Projects</h2>
              <button>Update</button>
            </div>
            <div className="items">
              <h2>Profile Summary</h2>
              <button>Update</button>
            </div>
            <div className="items">
              <h2>Accomplishment</h2>
              <button>Update</button>
            </div>
            <div className="items">
              <h2>Career Profile</h2>
              <button>Update</button>
            </div>
            <div className="items">
              <h2>Personal details</h2>
              <button>Update</button>
            </div>
          </div>
        </div>
        <div className="quicklinks-details">
          <div className="resume-section profile-background">
            <div className="resume-heading">
              <h1>Resume</h1>
              <p>
                Resume is the most important document recruiters look for.
                Recruiters generally do not look at profiles without resumes.
              </p>
            </div>
            <div className="upload-view">
              <div className=" cvpreview">
                <h2>
                  farineResume.pdf{" "}
                  <span>
                    <i className="fa-solid fa-download"></i>{" "}
                    <i className="fa-regular fa-trash-can"></i>
                  </span>
                </h2>
                <p>Uploaded on Jan 03, 2024</p>
              </div>
              <div className="upload">
                <Button color="primary" variant="ghost" className="">
                  Update Resume
                </Button>
                <p>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
              </div>
            </div>
          </div>
          <div className="resume-headline profile-background">
            <div className="headline-detail">
              <h1>
                Resume Headline{" "}
                <span id="edit-icon">
                  <i className="fa-solid fa-pen"></i>
                </span>
              </h1>
              <p>
                Job Seeker Currently living in Mumbai, Maharashtra Experienced
                in Full Stack Developer .
              </p>
            </div>
          </div>
          <div className="key-skills profile-background">
            <h1>
              Key Skills
              <span id="edit-icon">
                <i className="fa-solid fa-pen"></i>
              </span>
            </h1>
            <div className="skills">
              {skillsarr.map((item, key) => (
                <p key={key}>{item.name}</p>
              ))}
            </div>
          </div>
          <div className="employment-section profile-background">
            <div className="employment-heading" id="section-heading">
              <h1>Employment</h1>
              <p>
                Add<span> Employment</span>
              </p>
            </div>
            <div className="employment-body" id="subheading">
              <h2>
                Fullstack Software Developer
                <span id="edit-icon">
                  <i className="fa-solid fa-pen"></i>
                </span>
              </h2>
              <h3>Wiantech Pvt.</h3>
              <h4 id="">
                Full-time <span>|</span> Jul 2023 to Jan 2024
              </h4>
              <p>
                Experienced full-stack developer at Wiantech, Mumbai. Proficient
                in Node.js for backend and Angular for frontend. Skilled in
                building modules, resolving bugs, and contributing to robust
                software solutions
              </p>
            </div>
          </div>
          <div className="education-section profile-background">
            <div className="" id="section-heading">
              <h1>Education</h1>
              <p>
                Add <span> Education</span>
              </p>
            </div>
            <div className="education-body" id="subheading">
              <h2>
                B.Com Commerce
                <span id="edit-icon">
                  <i className="fa-solid fa-pen"></i>
                </span>
              </h2>
              <h3>Viva College, Mumbai.</h3>
              <h4 id="">
                2019-2022 <span>|</span> Full-time
              </h4>
            </div>
          </div>
          <div className="project-section profile-background">
            <div className="" id="section-heading">
              <h1>Projects</h1>
              <p>
                Add <span>Project</span>
              </p>
            </div>
            <div className="project-body" id="subheading">
              <h2>
                TPL Sports
                <span id="edit-icon">
                  <i className="fa-solid fa-pen"></i>
                </span>
              </h2>
              <h3>Wiantech (Onsite)</h3>
              <h4 id="">Aug 2023 to Jan 2024 (Full Time)</h4>
              <p>
                Tennis premier league ,Its a tennis tournament platform, where
                players can register, and in tournament or can book schedules
                and academy can aslo register themselves and create tournaments
                they can make draw scores set matches and all
              </p>
            </div>
          </div>
          <div className="summary-section profile-background">
            <h1>
              Profile Summary
              <span id="edit-icon">
                <i className="fa-solid fa-pen"></i>
              </span>
            </h1>
            <p>
              I bring 1.6 years of valuable experience in Full stack
              development. My expertise extends to React.js, Angular, NodeJs and
              MomgoDB, and I currently serve as a Full Stack Developer at
              Wiantech in Mumbai, specializing in Mean Stack.
            </p>
          </div>
          <div className="accomplishment profile-background">
            <h1>Accomplishment</h1>
            <div className="accomplishment-main">
              <div className="accomplishment-heading" id="section-heading">
                <h5>Online profile</h5>
                <p>Add</p>
              </div>
              <p className="text-gray-400 font-thin">
                Add details of certifications you have achieved/completed
              </p>
            </div>
            <div className="accomplishment-main">
              <div className="accomplishment-heading" id="section-heading">
                <h5>Certification</h5>
                <p>Add</p>
              </div>
              <p className="text-gray-400 font-thin">
                Add details of certifications you have achieved/completed
              </p>
            </div>

            <div></div>
          </div>
          <div className="career profile-background">
            <h1>
              Career Profile
              <span id="edit-icon">
                <i className="fa-solid fa-pen"></i>
              </span>
            </h1>
            <div className="career-items">
              <div>
                <p>Current industry</p>
                <h1>IT Services & Consulting</h1>
              </div>
              <div>
                <p>Role category</p>
                <h1>Software Development</h1>
              </div>
              <div>
                <p>Desired job type</p>
                <h1>contractual, permanent</h1>
              </div>
              <div>
                <p>Preferred shift</p>
                <h1>Day</h1>
              </div>
              <div>
                <p>Preferred work location</p>
                <h1>Mumbai</h1>
              </div>
              <div>
                <p>Expected salary</p>
                <h1>₹4,00,000</h1>
              </div>
              <div>
                <p>Department</p>
                <h1>Engineering - Software & QA</h1>
              </div>
              <div>
                <p>Job role</p>
                <h1>Full Stack Developer</h1>
              </div>
              <div>
                <p>Desired employment type</p>
                <h1>Full Time, Part Time</h1>
              </div>
            </div>
          </div>
          <div className="personal profile-background">
            <h1>
              Personal Details
              <span id="edit-icon">
                <i className="fa-solid fa-pen"></i>
              </span>
            </h1>
            <div className="personal-items">
              <div>
                <p>Personal</p>
                <h3>female, Single / unmarried,</h3>
              </div>
              <div>
                <p>Date of birth</p>
                <h3>09 Jan 2000</h3>
              </div>
              <div>
                <p>Category</p>
                <h3>General</h3>
              </div>
              <div>
                <p>Differently abled</p>
                <h3>No</h3>
              </div>
              <div>
                <p>Career break</p>
                <h3>Add Career break</h3>
              </div>
              <div>
                <p>Work permit</p>
                <h3>Add Work permit</h3>
              </div>
              <div>
                <p>Address</p>
                <h3 style={{ width: "25vw" }}>
                  E-004, merko hsg complex, Manvel pada road, Morya nagar, Virar
                  (east), Palghar- 401305, VIRAR EAST, 401305
                </h3>
              </div>
            </div>
            <hr />
            <div className="language">
            <div className="mb-2" id="section-heading">
              <h1>Language</h1>
              <p>
                Add 
              </p>
            </div>
              <Table aria-label="Example table with dynamic content">
                <TableHeader columns={columns}>
                  {(column) => (
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                  )}
                </TableHeader>
                <TableBody items={rows}>
                  {(item) => (
                    <TableRow key={item.key}>
                      {(columnKey) => (
                        <TableCell>{getKeyValue(item, columnKey)} </TableCell>
                      
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
