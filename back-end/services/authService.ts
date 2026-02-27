import { UserModel } from "../Models/UserModel.ts";
import slugify from "slugify";
import { generateToken } from "../utils/GenerateToken.ts";
import APIERROR from "../utils/apiError.ts";
import bcrypt from "bcrypt";

interface UserInput {
  name: string;
  email: string;
  phone: string;
  password: string;
  passwordconfirm: string;
}

export const registerUser = async ({
  name,
  email,
  password,
  passwordconfirm,
  phone,
}: UserInput) => {
  const userfound = await UserModel.findOne({ email });
  if (userfound) {
    throw new Error("User already exists");
  }
  const User = await UserModel.create({
    name,
    email,
    phone,
    password,
    passwordconfirm,
    slug: slugify(name),
  });
  const token = generateToken(User._id.toString());
  return {
    data: User,
    token,
  };
};

export const loginUser = async ({ email, password }: UserInput) => {
  const user = await UserModel.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new APIERROR("Incorrect email or password", 400);
  }
  const token = generateToken(user._id.toString());
  return { token, user };
};

export const ProtectUser = async () => {};
