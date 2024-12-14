const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true }, // "kauc"
    subcategories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subcategory" }],
});

module.exports = mongoose.model("Category", CategorySchema);