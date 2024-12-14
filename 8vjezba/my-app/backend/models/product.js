const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true }, // "Moderni krevet na razvlačenje"
    description: { type: String },
    price: { type: String },
    material: { type: String },
    subcategory: { type: mongoose.Schema.Types.ObjectId, ref: "Subcategory", required: true }, // referenca na subcateogry
});

module.exports = mongoose.model("Product", ProductSchema); 