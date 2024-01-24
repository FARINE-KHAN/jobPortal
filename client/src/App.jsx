import React, { Suspense } from "react";
import Loading from "./components/loading/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css"

const Home = React.lazy(() => import("./pages/root/home/Home"));
const JobSeekerRegister = React.lazy(() => import("./pages/jobSeeker/register/Register"));
const NavBar = React.lazy(() => import("./layout/navBar/NavBar"));

const App = () => {
    return(
  <>
    <BrowserRouter>
      <NavBar />
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/job-seeker/register" element={<JobSeekerRegister/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
  )
};

export default App;
