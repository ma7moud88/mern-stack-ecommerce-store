import APIERROR from "../utils/apiError.ts";

const sendErrorForDev = (err: any, res: any) =>
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });

const sendErrorForProd = (err: any, res: any) =>
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
const handleJwtInvalidSignature = () =>
  new APIERROR("Invalid token, please login again..", 401);

const handleJwtExpired = () =>
  new APIERROR("Expired token, please login again..", 401);

export const globalError = (err: any, req: any, res: any, next: any) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.NODE_ENV === "development") {
    sendErrorForDev(err, res);
  } else {
    if (err.name === "JsonWebTokenError") err = handleJwtInvalidSignature();
    if (err.name === "TokenExpiredError") err = handleJwtExpired();
    sendErrorForProd(err, res);
  }
};
