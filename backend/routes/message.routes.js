import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../Middleware/protectRoute.js";
const router = express.Router();

router.get("/get/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
