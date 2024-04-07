import React, { useEffect, useState } from "react";
import "./profileModal.css";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
} from "@nextui-org/react";
import { getAPI, putAPI, useSessionData } from "../../../utils/commonFunctions";
import { serverVariables } from "../../../utils/serverVariables";
import { profileLabels ,dropdownKeys,getOptionsByKey } from "./arrayOfInputs";
function DropdownInput({ label, value, options, onChange }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="shadow" className="btn-ghost" fullWidth>
          {value || label}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dropdown Menu">
        {options.map((option) => (
          <DropdownItem
            key={option.value}
            onClick={() => onChange(option.value)}
          >
            {option.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

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
          <div className="input-fields">

          {Object.keys(data).map((key, index) => {
              if (dropdownKeys.includes(key)) {
                {console.log(key)}
                return (
                  <DropdownInput
                    key={key}
                    label={labels[index]}
                    value={data[key]}
                    options={getOptionsByKey(key)}
                    onChange={(value) => handleChange(key, value)}
                  />
                );
              } else {
                return (
                  <Input
                    key={key}
                    name={key}
                    value={data[key]}
                    label={labels[index]}
                    onChange={(e) => handleChange(key, e.target.value)}
                    variant="underlined"
                  />
                );
              }
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
    </div>
  );
};

export default ProfileModal;
