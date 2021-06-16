const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const whiteSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        region: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        cepage: {
            type: String,
            required: true,
        },
        millenium: {
            type: String,
            required: true,
        },
        alcohol: {
            type: String,
            required: true,
        },
        volume: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const White = mongoose.model("White", whiteSchema);

module.exports = White;
