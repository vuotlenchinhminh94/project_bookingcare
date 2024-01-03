import express from "express";
import homeController from "./homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    // router.get("/", (req, res) => {
    //     return res.send("Hello Felix Nguyen");
    // })
    router.get("/", homeController.getHomePage);
    // rest api
    router.get("/kuku", (req, res) => {
        return res.send("Hello Kuku")
    })


    return app.use("/", router)
}

module.exports = initWebRoutes;