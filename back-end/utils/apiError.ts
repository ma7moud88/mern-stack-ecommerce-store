class APIERROR extends Error {
  statusCode: number;
  status: String;
  isOperational: boolean;
  constructor(message: any, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fial" : "error";
    this.isOperational = true;
  }
}

export default APIERROR;
