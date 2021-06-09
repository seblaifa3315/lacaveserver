const express = require("express");

const shopRouter = express.Router();

shopRouter
    .route("/")
    .get((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("you did a get request");
    })
    .post((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(
            `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
        );
    })
    .put((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("you did a put request");
    })
    .delete((req, res) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("you did a delete request");
    });

module.exports = shopRouter;
