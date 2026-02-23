import { validationResult } from "express-validator";

export const ValidationMiddleWare = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = errors.array().map((err) => ({
    field: err.type,
    message: err.msg,
  }));
  return res.status(400).json({
    status: "field",
    errors: extractedErrors,
  });
};
