import React, { Suspense } from "react";
import Loading from "./components/loading/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthGaurd from "./utils/AuthGaurd";

//root
const Home = React.lazy(() => import("./pages/root/home/Home"));
const About = React.lazy(() => import("./pages/root/about/About"));
const Contact = React.lazy(() => import("./pages/root/contact/Contact"));

//jobseeker
const JobSeekerRegister = React.lazy(() => import("./pages/jobSeeker/register/Register"));
const JobSeekerLogin = React.lazy(() => import("./pages/jobSeeker/login/Login"));
const JobSeekerProfile = React.lazy(() => import("./pages/jobSeeker/profile/Profile"));
const JobSeekerDashboard = React.lazy(() => import("./pages/jobSeeker/dashboard/Dashboard"));



const NavBar = React.lazy(() => import("./layout/navBar/NavBar"));

const App = () => {
    return(
  <>
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={<Loading/>}>
        <Routes>
          {/* root */}
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />

          {/* jobseeker */}
          <Route path="/job-seeker/register" element={<JobSeekerRegister/>} />
          <Route path="/job-seeker/login" element={<JobSeekerLogin/>} />
          {/* authGaurd is used to protect routes that require authentication */}
          <Route path="/job-seeker/profile/:id" element={<AuthGaurd><JobSeekerProfile/></AuthGaurd>} />
          <Route path="/job-seeker/dashboard" element={<JobSeekerDashboard/>} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
  )
};

export default App;
