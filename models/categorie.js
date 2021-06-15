const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorieSchema = new Schema(
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
    },
    {
        timestamps: true,
    }
);

const Categorie = mongoose.model("Categorie", categorieSchema);

module.exports = Categorie;
