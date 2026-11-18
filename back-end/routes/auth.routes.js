import express from "express";
import {checkCookie, getUserDetails, loginUser} from "../controllers/auth.controller.js";
import { authMiddleware } from "../milddleware/auth.middleware.js";

const router = express.Router();

//login
router.post("/login", loginUser);
//check cookie
router.get("/check-cookie",checkCookie);

//fetch user  details

router.get("/user-details",
    authMiddleware.verifyToken,
     getUserDetails);

export default router;