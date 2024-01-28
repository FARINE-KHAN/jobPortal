import express from "express";
import { createNewUser} from "../controllers/jobSeeker/jobSeekerController.js";
const router= express.Router();

router.post("/register",createNewUser)
router.post("/login",createNewUser)




export default router;