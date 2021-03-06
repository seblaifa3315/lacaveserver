const express = require("express");
const White = require("../models/white");
const cors = require("./cors");

const whiteRouter = express.Router();

whiteRouter
    .route("/")
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, (req, res, next) => {
        White.find()
            .then((white) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(white);
            })
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, (req, res, next) => {
        White.create(req.body)
            .then((white) => {
                console.log("Red Created ", white);
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(white);
            })
            .catch((err) => next(err));
    })
    .put(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /shop/Whites");
    })
    .delete(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end("DELETE operation not supported on /shop/Whites");
    });

module.exports = whiteRouter;
