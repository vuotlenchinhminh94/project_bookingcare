import express from "express";
import bodyParser from "body-parser"; // dung de get param from route
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

let app = express();

// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 6969;

app.listen(port, () => {
    console.log("Backend NodeJS is running on the port: " + port);
});