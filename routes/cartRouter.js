const express = require("express");
const Cart = require("../models/cart");
const cors = require("./cors");

const cartRouter = express.Router();

cartRouter
    .route("/")
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, (req, res, next) => {
        Cart.find()
            .then((cart) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(cart);
            })
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, (req, res, next) => {
        Cart.create(req.body)
            .then((cart) => {
                console.log("Cart Created ", cart);
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(cart);
            })
            .catch((err) => next(err));
    })
    .put(cors.corsWithOptions, (req, res) => {
        res.statusCode = 403;
        res.end("PUT operation not supported on /cart");
    })
    .delete(cors.corsWithOptions, (req, res) => {
        Cart.findByIdAndDelete(req.body._id)
            .then((response) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(response);
            })
            .catch((err) => next(err));
    });

module.exports = cartRouter;
