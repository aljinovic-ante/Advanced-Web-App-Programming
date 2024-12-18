const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const Category = require("./models/category.js");
const Subcategory = require("./models/subcategory.js");
const Product = require("./models/product.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/vjezba";

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));

app.get("/api/categories", async (req, res) => {
    try {
        const categories = await Category.find().populate("subcategories");
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: "Error fetching categories" });
    }
});

app.get("/api/categories/:id/subcategories", async (req, res) => {
    try {
        const category = await Category.findById(req.params.id).populate("subcategories");
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.json(category.subcategories);
    } catch (err) {
        res.status(500).json({ error: "Error fetching subcategories" });
    }
});

app.get("/api/subcategories/:id/products", async (req, res) => {
    try {
        const subcategory = await Subcategory.findById(req.params.id).populate("products");
        if (!subcategory) {
            return res.status(404).json({ error: "Subcategory not found" });
        }
        res.json(subcategory.products);
    } catch (err) {
        res.status(500).json({ error: "Error fetching products" });
    }
});

app.get("/api/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(product);
    } catch (err) {
        res.status(500).json({ error: "Error fetching product" });
    }
});

app.get("/", (req, res) => {
    res.send("root server");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});