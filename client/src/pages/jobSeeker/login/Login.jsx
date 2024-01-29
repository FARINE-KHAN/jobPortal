import React, { useState } from "react";
import "../register/register.css";
import { serverVariables } from "../../../utils/serverVariables";
import { Input } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import Loading from "../../../components/loading/Loading";
import toast from "react-hot-toast";
import {
  newSessionData,
  postAPI,
  validEmail,
  validPassword,
  validString,
} from "../../../utils/commonFunctions";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async () => {
    if (validEmail(inputs.email))
      return toast.error("Please Enter Valid Email");
    else {
      const res = await postAPI( serverVariables.JobSeekerLogin, setLoading, inputs);
      if (res?.status === 200) {
        newSessionData("user", res?.data);
        toast.success("Login Successfull");
        navigate("/")
      }
    }
  };
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="b">
      {loading && <Loading />}

      <div className="custom-modal">
        <p className="text-2xl font-bold">Login Here!</p>
        <div className="body">
          <div className="items">
            <Input
              type="email"
              label="Email"
              name="email"
              onChange={handleChange}
              onClear={() => console.log("input cleared")}
            />

            <Input
              type={isVisible ? "text" : "password"}
              label="Password"
              name="password"
              onChange={handleChange}
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={toggleVisibility}
                >
                  {isVisible ? (
                    <i className="fa-solid fa-eye-slash"></i>
                  ) : (
                    <i className="fa-solid fa-eye"></i>
                  )}
                </button>
              }
            />
          </div>
        </div>

        <Button onClick={handleSubmit} color="primary" variant="shadow">
          Submit
        </Button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          New to here?{" "}
          <Link
            to="/job-seeker/register"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
