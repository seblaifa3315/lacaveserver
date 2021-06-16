const express = require("express");
const Red = require("../models/red");
const cors = require("./cors");

const redRouter = express.Router();

redRouter
    .route("/")
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, (req, res, next) => {
        Red.find()
            .then((red) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(red);
            })
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, (req, res, next) => {
        Red.create(req.body)
            .then((red) => {
                console.log("Red Created ", red);
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(red);
            })
            .catch((err) => next(err));
    })
    .put(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /shop/Reds");
    })
    .delete(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end("DELETE operation not supported on /shop/Reds");
    });

module.exports = redRouter;
