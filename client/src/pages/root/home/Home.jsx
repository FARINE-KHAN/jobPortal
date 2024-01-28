import { Button } from "@nextui-org/react";
import React from "react";
import "./Home.css";
import application from "../../../assets/svg/application.svg";
import interview from "../../../assets/svg/interview.svg";
import placed from "../../../assets/svg/placed.svg";
import Footer from "../../../layout/footer/Footer";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate= useNavigate()
  return (
    <div className="home">
      <div className="header flex flex-col justify-center items-center w-100 gap-6">
        <h1>Your Job Search Simplified</h1>
        <p>
          Streamline your job search with ease on our user-friendly platform,
          connecting you to diverse career opportunities
        </p>
        <div className="buttons flex gap-10">
          <Button onClick={()=>navigate("/job-seeker/login")} color="primary" variant="shadow" className="p-6">
            Find Jobs
          </Button>
          <Button color="primary" onClick={()=>navigate("/recruiter/login")} variant="ghost" className="text-bold p-6">
            Hire Talent
          </Button>
        </div>
      </div>
      <div className="status">
        <div className="item">
          <img src={application} alt="application" />
          <h4>Apply</h4>
        </div>
        <div className="item">
          <img src={interview} alt="interview" />
          <h4>Interview</h4>
        </div>
        <div className="item">
          <img src={placed} alt="placed" />
          <h4>Get Placed</h4>
        </div>
      </div>
      <div className="company">
        <h1>
          <span style={{ color: "#0070F0" }}>30,00,000+ professionals</span>{" "}
          from 16,500 companies are cutting short their path to success
        </h1>
        <div className="logos">
          <img
            src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png"
            alt="amazon"
          />
          <img
            src="https://www.transparentpng.com/thumb/google-logo/google-logo-png-icon-free-download-SUF63j.png"
            alt="google"
          />
          <img
            src="https://i.pinimg.com/originals/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.png"
            alt="flipkart"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png?20170729032638"
            alt="paytm"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/ZOHO.svg/2560px-ZOHO.svg.png"
            alt="zoho"
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/various-icons-2/476/Twitter.png"
            alt="twitter"
          />
          <img
            src="https://hatchhead.co/_next/image?url=%2Fimg%2Fblog%2Fuber-banner.png&w=3840&q=75"
            alt="uber"
            id="last-image"
          />
        </div>
      </div>

      <div className="end-section w-100 flex flex-col items-center gap-5">
        <h1>Ready to realize your true potential?</h1>
        <h3>70% techies find their perfect opportunities within 10 with a help of us.</h3>
        <Button color="primary" variant="shadow" className="p-6" onClick={()=>navigate("/job-seeker/login")} >Get Started</Button>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
