import asynchandler from "express-async-handler";
import { loginUser } from "../../services/authService.ts";
import type { Request, Response } from "express";

export const Login = asynchandler(async (req: Request, res: Response) => {
  const result = await loginUser(req.body);
  res.status(200).json({
    msg: "User login successfully",
    ...result,
  });
});
