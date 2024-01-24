import axios from "axios";
import { useState } from "react";
import { API_URL } from "../admin/API_URL";

export const usePostAPI =()=>{
     const [data, setData] = useState(null);
     const [error, setError] = useState(null);
     const [loading, setLoading] = useState(null);
     const postData = async(url,inputs)=>{
        setLoading(true);
        try {
            const res = await axios.post(API_URL+url,inputs);
            setData(res.data);
            setError(null);
        } catch (error) {
            setTimeout(()=>{
                setError(error.response.data);
            },3000)
        }
        setLoading(false);
     }
     return { data, error, loading, postData, setError };
};