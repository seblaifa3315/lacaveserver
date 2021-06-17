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
    .put(cors.corsWithOptions, (req, res, next) => {
        console.log(`deleting ${req.body}`)
        Cart.findByIdAndUpdate(req.body._id, {
            $set: req.body
        }, { new: true })
        .then(item => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(item);
        })
        .catch(err => next(err));
    })
    .delete(cors.corsWithOptions, (req, res, next) => {
        Cart.findByIdAndDelete(req.body._id)
            .then((response) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(response);
            })
            .catch((err) => next(err));
    });

module.exports = cartRouter;
