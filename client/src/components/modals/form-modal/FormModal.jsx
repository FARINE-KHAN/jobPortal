import React from 'react'
import "./FormModal.css"
import { Button } from '@nextui-org/react'
const FormModal = ({setModal,handleNavigation,pageId}) => {
    const toggleButton=(page)=>{
        setModal(false);
        handleNavigation(`/${page}/${pageId}`);
    }
  return (
    <div className='b main'>
        <div className='custom-modal'>
            <h1 onClick={()=>setModal(false)}>
                x
            </h1>
            <div className='buttons'>

            <Button  onClick={()=>toggleButton("job-seeker")} color='primary' variant='shadow'>Job Seeker</Button>
            <Button  onClick={()=>toggleButton("recruiter")} color='primary' variant='shadow'>Recruiter</Button>
            </div>

        </div>
    </div>
  )
}

export default FormModal