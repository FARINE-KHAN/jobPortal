import express from "express";
import { createNewUser, loginUser} from "../controllers/jobSeeker/jobSeekerController.js";
const router= express.Router();

router.post("/register",createNewUser)
router.post("/login",loginUser)




export default router;