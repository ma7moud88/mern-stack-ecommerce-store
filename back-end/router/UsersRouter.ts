import express from "express";
import CreateRegister from "../services/Auth/register.ts";
import { registerValidator } from "../utils/Validators/authValidator.ts";

const router = express.Router();

router.route("/").post(CreateRegister, registerValidator);

export default router;
