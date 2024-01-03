import express from "express";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send("Hello Felix Nguyen")
    })
    return app.use("/", router)
}

module.exports = initWebRoutes;