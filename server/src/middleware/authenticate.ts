import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import MyError from "../utils/myError";
import User from "../model/user";
import { IReq } from "../utils/interface";

export const authenticate = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization) {
      throw new MyError("Token байхгүй байна. заавал token илгээх ёстой", 400);
    }
    const token = req.headers.authorization.split(" ")[1];
    console.log("TOKEN", token);
    if (!token) {
      throw new MyError("Энэ үйлдлийг хийхийн тулд нэвтэрх ёстой", 400);
    }

    const { id } = jwt.verify(token!, process.env.JWT_PRIVATE_KEY!) as {
      id: string;
    };
    console.log("id");
    const findUser = await User.findById(id);
    console.log("foundUser", findUser);
    req.user = findUser;
    console.log("end");
    next();
  } catch (error) {
    next(error);
  }
};