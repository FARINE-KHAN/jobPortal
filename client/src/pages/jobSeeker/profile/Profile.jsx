import React from "react";
import "./profile.css";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-basic">
        <div className="profile-image">
          <img
            src="https://img.freepik.com/premium-photo/woman-wearing-black-head-scarf_777078-39469.jpg"
            alt="profile-img"
          />
        </div>
        <div className="basic-info">
          <div className="username">
            <div className="username-info">
              <h1>
                Farine Khan{" "}
                <span>
                  {" "}
                  <i className="fa-solid fa-pen"></i>
                </span>
              </h1>
              <h2>Full Stack Developer</h2>
              <h3>
                <span> Comapny Name</span>
              </h3>
            </div>

            <p>
              <span>Profile Last Upadted - </span>Today
            </p>
          </div>
          <div className="basic-details">
            <div className="loaction">
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
               1 years, 6 months .
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
               farine@gmail.com.
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
    </div>
  );
};

export default Profile;
