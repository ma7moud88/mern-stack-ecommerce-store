import JWT from "jsonwebtoken";
import { sign } from "node:crypto";
export const generateToken = (userId: string) => {
  return JWT.sign({ userId }, process.env.JWT_SECRET_kEY as string, {
    expiresIn: "120d",
  });
};
