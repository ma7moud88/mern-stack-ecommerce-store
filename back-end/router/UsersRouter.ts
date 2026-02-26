import express from "express";
import { Register } from "../controller/Auth/register.ts";
import { Login } from "../controller/Auth/login.ts";
import {
  registerValidator,
  loginValidator,
} from "../Validators/authValidator.ts";

const router = express.Router();

router.route("/register").post(registerValidator, Register);
router.route("/login").post(loginValidator, Login);
export default router;
