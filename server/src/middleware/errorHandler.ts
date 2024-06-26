import { Response, Request, NextFunction } from "express";

interface IMyError extends Error {
  statusCode: number;
}

const errorHandler = (
  err: IMyError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("ERR MESSAGE =====>", err.message);
  console.log("ERR STACK =====>", err.stack);

  if (err.message === "jwt expired")
    err.message = "Token-ний хугацаа дууссан байна дахин нэвтэрнэ үү";
  else if (err.message === "invalid signature")
    err.message = "Token буруу байна дахин нэвтэрнэ үү";
  else if (err.message === "jwt malformed")
    err.message = "Token хугацаа дууссан байна дахин нэвтэрнэ үү";
  else err.message = err.message;

  return res.status(err.statusCode || 500).json({
    message: err.message || "Серверт алдаа гарлаа дахин оролдоно уу",
  });
};

export default errorHandler;
