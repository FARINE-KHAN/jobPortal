import React from "react";
import "./FormModal.css";
import { Button } from "@nextui-org/react";
import { deleteSessionData } from "../../../utils/commonFunctions";
const FormModal = ({ setModal, handleNavigation, pageId }) => {
  const toggleButton = (page) => {
    setModal(false);
    handleNavigation(`/${page}/${pageId}`);
  };
  const handleChange = () => {
      deleteSessionData("user");
      handleNavigation("/job-seeker/login")  
      setModal(false);
  }
  return (
    <div className="b main">
      {pageId == "Logout" ? (
        <div className="custom-modal">
          <h2>Are You Sure, Want To Logout? </h2>
          <div className="buttons">
            <Button
              onClick={handleChange}
              color="danger"
              variant="shadow"
              style={{width:"100%"}}
            >
              Logout
            </Button>
            <Button
              onClick={() => setModal(false)}
              color="primary"
              variant="ghost"
              style={{color:"#fff",width:"100%"}}
            >
              Stay Login
            </Button>
          </div>
        </div>
      ) : (
        <div className="custom-modal">
          <h1 onClick={() => setModal(false)}>x</h1>
          <div className="buttons">
            <Button
              onClick={() => toggleButton("job-seeker")}
              color="primary"
              variant="shadow"
            >
              Job Seeker
            </Button>
            <Button
              onClick={() => toggleButton("recruiter")}
              color="primary"
              variant="shadow"
            >
              Recruiter
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
