import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
import protectRoute from "../Middleware/protectRoute.js";
const router = express.Router();


router.post("/send/:id", protectRoute, sendMessage);
router.get("/get/:id", protectRoute, getMessages);


export default router;
