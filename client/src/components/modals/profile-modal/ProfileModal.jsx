import React, { useEffect, useState } from "react";
import "./profileModal.css";
import { Button, Input } from "@nextui-org/react";
import { getAPI, putAPI, useSessionData } from "../../../utils/commonFunctions";
import { serverVariables } from "../../../utils/serverVariables";
import { profileLabels } from "./arrayOfInputs";

const ProfileModal = ({ setProfileBasicModal, title, responseData }) => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState("");
  const labels = profileLabels(title)?.split(",");
  let user = useSessionData("user");
  let inputsvalue;
  const getUserData = async () => {
    const res = await getAPI(
      serverVariables.GetJobSeekerDetails + user._id,
      setLoading,
      inputsvalue
    );
    setData(res?.data);
  };

  const handleChange = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async () => {
    const res = await putAPI(
      serverVariables.UpdateJobSeekerDetails + user._id,
      setLoading,
      data
    );
  };
  useEffect(() => {
    // getUserData();
    setData(responseData);
  }, []);
  return (
    <div className="b profilemain">
      <div className="custom-modal">
        <h1 onClick={() => setProfileBasicModal(false)}>x</h1>
        <div className="content">
          <h2>Basic Details</h2>
          {Object.keys(data).map((key) => {
            let lab = Object.keys(labels).indexOf(key);
            <Input
              key={key}
              name={key}
              value={data[key]}
              label={lab}
              onChange={(e) => handleChange(key, e.target.value)}
              variant="underlined"
            />;
          })}
          {/* <label>
            First Name<span style={{ color: "red" }}>*</span>
          </label>
          <Input
            type="text"
            onChange={handleChange}
            name="firstName"
            value={data.firstName}
          /> */}

          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
