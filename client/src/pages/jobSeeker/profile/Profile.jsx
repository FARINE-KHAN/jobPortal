import React from "react";
import "./profile.css";
const Profile = () => {
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
                Farine Khan
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
                farine@gmail.com
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
          <h1 >Quick Links</h1>
          <div className="links">
           <div className="items">
            <h2>Resume</h2><button>Update</button>
           </div>
           <div className="items">
            <h2>Resume headline</h2><button>Update</button>
           </div>
           <div className="items">
            <h2>Skills</h2><button>Update</button>
           </div>
           <div className="items">
            <h2>Employment</h2><button>Update</button>
           </div>
           <div className="items">
            <h2>Education</h2><button>Update</button>
           </div>
           <div className="items">
            <h2>Profile Summary</h2><button>Update</button>
           </div>
           <div className="items">
            <h2>Projects</h2><button>Update</button>
           </div>
           <div className="items">
            <h2>Accomplishment</h2><button>Update</button>
           </div>
           <div className="items">
            <h2>Career Profile</h2><button>Update</button>
           </div>
           <div className="items">
            <h2>Personal details</h2><button>Update</button>
           </div>
           
          </div>
        </div>
        <div className="quicklinks-details">

        </div>

      </div>
    </div>
  );
};

export default Profile;
