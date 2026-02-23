import { check } from "express-validator";
import { ValidationMiddleWare } from "../../MiddleWare/ValidatorMiddleWare.ts";
import { UserModel } from "../../Models/UserModel.ts";

export const registerValidator = [
  check("name")
    .notEmpty()
    .withMessage("Name is required!")
    .isLength({ min: 3 }),
  check("email")
    .notEmpty()
    .withMessage("Email is required!")
    .isEmail()
    .withMessage("Invalid email address!")
    .custom((val) =>
      UserModel.findOne({ email: val }).then((user) => {
        if (user) {
          return Promise.reject(new Error("E-mail already in user"));
        }
      }),
    ),
  check("password")
    .notEmpty()
    .withMessage("password is required!")
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters")
    .custom((password, { req }) => {
      if (password !== req.body.passwordcomfirm) {
        throw new Error("Password Comfirmation incorrect");
      }
      return true;
    }),
  check("passwordcomfirm")
    .notEmpty()
    .withMessage("Password confirmation required"),
  check("phone").notEmpty(),

  ValidationMiddleWare,
];
