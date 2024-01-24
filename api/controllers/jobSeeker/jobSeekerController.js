import userProfileModel from "../../models/JobSeeker/userProfile.js";

export const createNewUser = async(req, res) => {
    try {
            console.log(req.body)
        const userData= await userProfileModel.create(req.body);
        res.status(201).json("data inserted")
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const fetchAllUser = async(req, res) => {
    try {
        const getuser = await userProfileModel.find()
            res.status(200).json(getuser)
        
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const fetchOneUser = async(req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const updateUser = async(req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export const deleteUser = async(req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
