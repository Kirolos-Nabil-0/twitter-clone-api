import { Request, Response, NextFunction } from "express";
import Tweet, { TweetDocument } from "../models/Tweets";

export const getAllTweets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Tweet.find();
    res.send({ name: "Tweet Route", data });
  } catch (err) {
    next(err);
  }
};

export const createTweet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tweet: TweetDocument = new Tweet(req.body);
    const data = await tweet.save();
    res.send({ name: "Tweet Route", data });
  } catch (err) {
    next(err);
  }
};

export const getTweet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Tweet.findById(req.params.id);
    res.send({ name: "Tweet Route", data });
  } catch (err) {
    next(err);
  }
};

export const updateTweet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Tweet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send({ name: "Tweet Route", data });
  } catch (err) {
    next(err);
  }
};

export const deleteTweet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Tweet.findByIdAndDelete(req.params.id);
    res.send({ name: "Tweet Route", data });
  } catch (err) {
    next(err);
  }
};

export const likeTweet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Tweet.findByIdAndUpdate(req.params.id, {
      $addToSet: { likes: req.body.userId },
    });
    res.send({ name: "Tweet Route", data });
  } catch (err) {
    next(err);
  }
};

export const unlikeTweet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Tweet.findByIdAndUpdate(req.params.id, {
      $pull: { likes: req.body.userId },
    });
    res.send({ name: "Tweet Route", data });
  } catch (err) {
    next(err);
  }
};

export const retweet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Tweet.findByIdAndUpdate(req.params.id, {
      $addToSet: { retweets: req.body.userId },
    });
    res.send({ name: "Tweet Route", data });
  } catch (err) {
    next(err);
  }
};

export const unretweet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await Tweet.findByIdAndUpdate(req.params.id, {
      $pull: { retweets: req.body.userId },
    });
    res.send({ name: "Tweet Route", data });
  } catch (err) {
    next(err);
  }
};

export const replyToTweet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const tweet: TweetDocument = new Tweet(req.body);
    const data = await tweet.save();
    res.send({ name: "Tweet Route", data });
  } catch (err) {
    next(err);
  }
};
