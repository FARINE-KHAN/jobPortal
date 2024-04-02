export const objForBasicInfo=(data,setDataForModal)=>{
    let newObj={
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
        phone: data?.phone,
        address:data?.address,
        totalExperience:data?.totalExperience,
        noticePeriod:data?.noticePeriod
    }
    return setDataForModal(newObj);
}