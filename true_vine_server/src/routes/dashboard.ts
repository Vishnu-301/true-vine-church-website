import express from "express";

const Router = express.Router();

Router.get("/dashboard", (_req, res) => {
    res.json({
        success: true,
        message: "Dashboard",
    });
});

export default Router;