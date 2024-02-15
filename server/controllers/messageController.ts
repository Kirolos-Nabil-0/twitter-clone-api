import { Request, Response, NextFunction } from "express";
import Message, { MessageDocument } from "../models/Message";

export const getAllMessages = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Message.find();
    res.send({ name: "Message Route", data });
  } catch (err) {
    next(err);
  }
};

export const createMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const message: MessageDocument = new Message(req.body);
    const data = await message.save();
    res.send({ name: "Message Route", data });
  } catch (err) {
    next(err);
  }
};

export const getMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Message.findById(req.params.id);
    res.send({ name: "Message Route", data });
  } catch (err) {
    next(err);
  }
};

export const updateMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Message.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({ name: "Message Route", data });
  } catch (err) {
    next(err);
  }
};

export const deleteMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Message.findByIdAndDelete(req.params.id);
    res.send({ name: "Message Route", data });
  } catch (err) {
    next(err);
  }
};

export const getMessagesByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Message.find({ sender: req.params.id });
    res.send({ name: "Message Route", data });
  } catch (err) {
    next(err);
  }
};

export const getMessagesByRecipient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Message.find({ recipient: req.params.id });
    res.send({ name: "Message Route", data });
  } catch (err) {
    next(err);
  }
};

export const getMessagesByUserAndRecipient = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Message.find({
      sender: req.params.id,
      recipient: req.params.recipientId,
    });
    res.send({ name: "Message Route", data });
  } catch (err) {
    next(err);
  }
};
