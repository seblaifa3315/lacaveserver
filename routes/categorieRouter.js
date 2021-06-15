const express = require("express");
const Categorie = require("../models/categorie");
const cors = require("./cors");

const categorieRouter = express.Router();

categorieRouter
    .route("/")
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, (req, res, next) => {
        Categorie.find()
            .then((categories) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "apploication/json");
                res.json(categories);
            })
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, (req, res, next) => {
        Categorie.create(req.body)
            .then((categorie) => {
                console.log("Categorie Created ", categorie);
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(categorie);
            })
            .catch((err) => next(err));
    })
    .put(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /shop");
    })
    .delete(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end("DELETE operation not supported on /shop");
    });

module.exports = categorieRouter;
