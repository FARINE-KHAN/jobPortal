import React, { useState } from 'react'
import { serverVariables } from '../../../utils/serverVariables';
import { postAPI } from '../../../utils/commonFunctions';

const Dashboard = () => {
  const [loading,setLoading]=useState(null);
  const handleSubmit=async ()=>{
    let inputs;
    const res = await postAPI(serverVariables.Payment,setLoading, inputs);
    console.log(res)
  }
  return (
    <div>Dashboard
      <div className=''>
        <button onClick={handleSubmit}> Pay</button>
      </div>
    </div>
  )
}

export default Dashboard