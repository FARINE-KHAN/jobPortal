import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/jp-logo.png";

const Footer = () => {
  const [toast, setToast] = useState(null);
  const handleError = () =>
    setToast({ type: "error", message: "Something went wrong!" });
  const closeToast = () => setToast(null);
  const navigate = useNavigate();
  const handleChange = (value) => navigate(value);

  return (
    <footer className="">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="logo" className="h-12 me-3" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Job-Portal
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-black dark:text-gray-400 font-medium">
                <li className="">
                About
                </li>
                <li>
                  Career
                </li>
                <li>
                  News
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium ">
                <li className="mb-4">
                  <a
                    href="https://github.com/FARINE-KHAN"
                    className="hover:underline "
                  >
                    <i className="fa-brands fa-github" style={{fontSize:"2rem" }} title="GitHub"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/farine-khan-329299241/"
                    className="hover:underline">
                    <i
                      className="fa-brands fa-linkedin"
                      title="LinkedIn"
                      style={{ color: "#126BC4",fontSize:"2rem" }}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
              Job-Portal™
            . All Rights Reserved.
          </span>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
