const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const redSchema = new Schema(
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

const Red = mongoose.model("Red", redSchema);

module.exports = Red;
