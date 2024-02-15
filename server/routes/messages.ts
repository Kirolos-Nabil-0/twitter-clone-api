import express from "express";
import * as messageController from "../controllers/messageController";
const router = express.Router();

/* GET all Messages */
router.get("/", messageController.getAllMessages);

/* POST create a Message */
router.post("/", messageController.createMessage);

/* GET a Message */
router.get("/:id", messageController.getMessage);

/* PUT update a Message */
router.put("/:id", messageController.updateMessage);

/* DELETE a Message */
router.delete("/:id", messageController.deleteMessage);

/* GET Messages by User */
router.get("/user/:id", messageController.getMessagesByUser);

/* GET Messages by Recipient */
router.get("/recipient/:id", messageController.getMessagesByRecipient);

/* GET Messages by User and Recipient */
router.get(
  "/user/:id/recipient/:recipientId",
  messageController.getMessagesByUserAndRecipient
);

export default router;
