import React, { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { useSessionData } from './commonFunctions';
import FormModal from '../components/modals/form-modal/FormModal';

const AuthGaurd = ({ children }) => {
    const isLoggedIn = useSessionData("user");
    const [modal,setModal]=useState(true);
    const navigate=useNavigate();
    if (!isLoggedIn) {
    //   const redirect = { redirected: true };
    //   useSessionData("auth", redirect)
    const handleNavigation=(path)=>{
        navigate(path);
    }
      return (
        <>
        <FormModal
          setModal={setModal}
          handleNavigation={handleNavigation}
          pageId={"login"}
        />
        </>
      );
    }
    return children;
  };
  

export default AuthGaurd