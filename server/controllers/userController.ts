import { Request, Response, NextFunction } from "express";
import User, { UserDocument } from "../models/User"; // Correct import statement for the User model

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await User.find();
    res.send({ name: "User Route", data });
  } catch (err) {
    next(err);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user: UserDocument = new User(req.body);
    const data = await user.save();
    res.send({ name: "User Route", data });
  } catch (err) {
    next(err);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await User.findById(req.params.id);
    res.send({ name: "User Route", data });
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({ name: "User Route", data });
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await User.findByIdAndDelete(req.params.id);
    res.send({ name: "User Route", data });
  } catch (err) {
    next(err);
  }
};

export const followUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await User.findByIdAndUpdate(
      req.params.id,
      { $push: { following: req.body.following } },
      { new: true }
    );
    res.send({ name: "User Route", data });
  } catch (err) {
    next(err);
  }
};

export const unfollowUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await User.findByIdAndUpdate(
      req.params.id,
      { $pull: { following: req.body.following } },
      { new: true }
    );
    res.send({ name: "User Route", data });
  } catch (err) {
    next(err);
  }
};
