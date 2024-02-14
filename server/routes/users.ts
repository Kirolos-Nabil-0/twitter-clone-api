import express from "express";
import * as userController from "../controllers/userController";
const router = express.Router();

/* GET all users */
router.get("/", userController.getAllUsers);

/* POST create a user */
router.post("/", userController.createUser);

/* GET a user */
router.get("/:id", userController.getUser);

/* PUT update a user */
router.put("/:id", userController.updateUser);

/* DELETE a user */
router.delete("/:id", userController.deleteUser);

/* follow a user */
router.post("/:id/follow", userController.followUser);

/* unfollow a user */
router.post("/:id/unfollow", userController.unfollowUser);

export default router;
