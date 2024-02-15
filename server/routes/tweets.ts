import express from "express";
import * as tweetsController from "../controllers/tweetsController";
const router = express.Router();

/* GET all tweets */
router.get("/", tweetsController.getAllTweets);

/* POST create a tweet */
router.post("/", tweetsController.createTweet);

/* GET a tweet */
router.get("/:id", tweetsController.getTweet);

/* PUT update a tweet */
router.put("/:id", tweetsController.updateTweet);

/* DELETE a tweet */
router.delete("/:id", tweetsController.deleteTweet);

/* POST like a tweet */
router.post("/:id/like", tweetsController.likeTweet);

/* POST unlike a tweet */
router.post("/:id/unlike", tweetsController.unlikeTweet);

/* POST retweet */
router.post("/:id/retweet", tweetsController.retweet);

/* POST unretweet */
router.post("/:id/unretweet", tweetsController.unretweet);

/* POST reply to a tweet */
router.post("/:id/reply", tweetsController.replyToTweet);

export default router;
