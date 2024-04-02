import express from "express";
import { createNewUser, fetchOneUser, loginUser, paymentgateway, updateUser} from "../controllers/jobSeeker/jobSeekerController.js";
const router= express.Router();

router.post("/register",createNewUser)
router.post("/login",loginUser)
router.get("/:userId",fetchOneUser)
router.put("/update/:userId",updateUser)

router.post("/pay",paymentgateway)

export default router;