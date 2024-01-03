import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("View engine", "ejs");
    app.set("View", "./src/views")
}

module.exports = configViewEngine;