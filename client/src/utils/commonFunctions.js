import axios from "axios";
import { API_URL } from "../admin/API_URL";
import toast from "react-hot-toast";

export const validString = (name) => {
    if (name.length <= 3) return false;
    return true;
  };
  
  export const validPhone = (phone) => {
    if (phone.length <= 9 && phone.length >= 11) return false;
    return true;
  };
  
  export const validEmail = (email) => {
    if ( typeof email !== "undefined" && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) return true;
    return false;
  };
  
  export const validPassword = (password) => {
    const error = "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one special character"
      if (typeof password !== "undefined" && !/^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.[@#$%&])[a-zA-Z0-9@#$%&]{8,}$/.test(password))
       return error;
      return false;
  }
  
  export const newSessionData = (key, value) => { return sessionStorage.setItem(key, JSON.stringify(value))}
  export const deleteSessionData = (key) => { return sessionStorage.removeItem(key)};
  export const useSessionData = (key) => { 
    const items = sessionStorage.getItem(key);
    return JSON.parse(items)
  }
 export const handleChange = (e,setInputs) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  export const postAPI = async(variables,setLoading,inputs)=>{
    try {
      setLoading(true);
      const res = await axios.post(API_URL+variables,inputs)
      return res;
    } catch (error) {
      toast.error(error?.response?.data||"Server Error");
    }finally{
      setLoading(false);
    }
  }
  export const getAPI = async(variables,setLoading,inputs)=>{
    try {
      setLoading(true);
      const res = await axios.get(API_URL+variables,inputs)
      return res;
    } catch (error) {
      toast.error(error?.response?.data||"Server Error");
    }finally{
      setLoading(false);
    }
  }