import { Request, Response } from "express";
import { UserModel } from "../../Models/UserModel";
import asynchandler from "express-async-handler";
import slugify from "slugify";

const CreateRegister = asynchandler(async (req: Request, res: Response) => {
  const { name, email, phone, password } = req.body;

  const findUser = await UserModel.findOne({ email });
  if (!findUser) {
    res.status(302).json({ msg: "Emial is already exists" });
    return;
  }
  const User = await UserModel.create({
    name,
    email,
    phone,
    password,
    slug: slugify(name),
  });
  res.status(201).json({
    msg: "User registered successfully",
    User,
  });
});
