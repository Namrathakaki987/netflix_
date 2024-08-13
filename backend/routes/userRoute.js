import express from "express"
import { Login, Logout, Register } from "../controllers/User.js";

const router=express.Router();

router.route("/register").post(Register);
router.route("/logout").get(Logout);
router.route("/login").post(Login);
export default router;