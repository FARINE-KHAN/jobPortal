import React, { useState } from "react";
import "./register.css";
import axios from "axios";
import { API_URL } from "../../../admin/API_URL";
import { serverVariables } from "../../../utils/serverVariables";
import { usePostAPI } from "../../../utils/utilService";
import { Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import {Button} from "@nextui-org/react";
import Loading from "../../../components/loading/Loading";
const Register = () => {
  const { data, postData, error, loading } = usePostAPI();
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async () => {
    try {
      postData(serverVariables.JobSeekerRegister, inputs);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="b">
      <Loading/>
      <div className="custom-modal">
        <p className="text-2xl font-bold">Register</p>
        <div className="body">
          <div className="items">
            <Input
              label="First Name"
              name="firstName"
              onChange={handleChange}
              onClear={() => console.log("input cleared")}
            />

            <Input
              label="Last Name"
              name="lastName"
              onChange={handleChange}
              onClear={() => console.log("input cleared")}
            />
          </div>
          <div className="items">
            <Input
              type="email"
              label="Email"
              name="email"
              onChange={handleChange}
              onClear={() => console.log("input cleared")}
            />

            <Input
              type="password"
              label="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>

        <Button onClick={handleSubmit}  color="primary" variant="shadow">Submit</Button>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="#"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
