const mongoose = require("mongoose");

const SubcategorySchema = new mongoose.Schema({
    name: { type: String, required: true }, // "na_razvlačenje"
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }, 
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

module.exports = mongoose.model("Subcategory", SubcategorySchema);