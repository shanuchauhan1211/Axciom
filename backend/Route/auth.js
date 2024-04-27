import express from "express";
const router = express.Router();


import {home ,logIn} from "../controllers/auth-controller.js";


router.route("/logIn").post(logIn);
router.get("/",home);





export default router;