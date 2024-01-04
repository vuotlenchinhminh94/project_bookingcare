import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
    // router.get("/", (req, res) => {
    //     return res.send("Hello Felix Nguyen");
    // })
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);
    // rest api
    router.get("/crud", homeController.getCRUD);


    return app.use("/", router)
}

module.exports = initWebRoutes;