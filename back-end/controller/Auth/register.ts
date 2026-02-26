import type { Request, Response } from "express";
import asynchandler from "express-async-handler";
import { registerUser } from "../../services/authService.ts";

export const Register = asynchandler(
  async (req: Request, res: Response) => {
    const result = await registerUser(req.body);
    res.status(201).json({
      msg: "User registered successfully",
      ...result,
    });
  },
);
