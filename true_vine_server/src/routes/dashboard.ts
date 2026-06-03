import express from "express";
import { broadcastEvent } from "../controllers/subscribeController.js";

const Router = express.Router();

Router.get("/dashboard", (_req, res) => {
    res.json({
        success: true,
        message: "Dashboard",
    });
});

Router.post("/broadcast-event", broadcastEvent);

export default Router;