export const objForBasicInfo=(data,setDataForModal)=>{
    let newObj={
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        phone: data?.phone,
        address:data?.address,
        year:data?.totalExperience?.year,
        month:data?.totalExperience?.month,
        noticePeriod:data?.noticePeriod
    }
    return setDataForModal(newObj);
}