import express from "express";
import { registerSubscriber, broadcastEvent } from "../controllers/subscribeController.js";

const Router = express.Router();

Router.get("/dashboard", (req, res) => {
    res.json({
        success: true,
        message: "Dashboard"
    })
})
Router.post("/register-subscriber", registerSubscriber)
Router.post("/broadcast-event", broadcastEvent)

export default Router;