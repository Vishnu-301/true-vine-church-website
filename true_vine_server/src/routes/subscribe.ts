import express from "express";
import { registerSubscriber, broadcastEvent } from "../controllers/subscribeController.js";

const router = express.Router();

router.post("/register-subscriber", registerSubscriber);
router.post("/broadcast-event", broadcastEvent);

export default router;
