import { Request, Response, NextFunction } from "express";
import { User } from "../models";

export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  User.find()
    .then((data) => {
      res.send({ name: "User Route", data });
    })
    .catch((err) => next(err));
};

export const createUser = (req: Request, res: Response) => {
  const user = new User(req.body);
  user
    .save()
    .then((data) => {
      res.send({ name: "User Route", data });
    })
    .catch((err) => res.send(err));
};
