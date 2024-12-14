const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Subcategory = require("./models/subcategory.js");
const Product = require("./models/product.js");
const Category = require("./models/category.js");
require("dotenv").config({ path: __dirname + "/.env" });
console.log("MONGO_URI:", process.env.MONGO_URI);

dotenv.config();

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");

        // Clear existing data
        await Category.deleteMany();
        await Subcategory.deleteMany();
        await Product.deleteMany();

        // Sample data
        const furnitureData = {
            kauc: {
                podvrste: [
                    {
                        type: "na_razvlačenje",
                        products: ["Moderni krevet na razvlačenje", "Pretvorivi kauč", "Sofa na razvlačenje", "Razvlačenje kauč s jastucima", "Kauč sa skladištem"],
                    },
                    {
                        type: "kožni",
                        products: ["Kožna kutna garnitura", "Talijanski kožni naslonjač", "Kožna sofa", "Kožni dvosjed", "Kožni trosjed"],
                    },
                    {
                        type: "kutni",
                        products: ["Kutna garnitura", "Kompaktni kutni kauč", "Kutni sofa", "Veliki kutni kauč", "Kutni kauč s jastucima"],
                    },
                ],
            },
            stol: {
                podvrste: [
                    {
                        type: "drveni",
                        products: ["Hrastov blagovaonski stol", "Rustikalni drveni stol", "Drveni stolić", "Masivni drveni stol", "Drveni stol s ukrasima"],
                    },
                    {
                        type: "stakleni",
                        products: ["Stakleni stolić za kavu", "Moderni stakleni stol", "Stakleni blagovaonski stol", "Stakleni stol s metalnim okvirom", "Stakleni stol s drvenim nogama"],
                    },
                    {
                        type: "skandinavski",
                        products: ["Skandinavski stol", "Nordijski stol", "Minimalistički stol", "Skandinavski stol za kavu", "Skandinavski blagovaonski stol"],
                    },
                ],
            },
            stolica: {
                podvrste: [
                    {
                        type: "s_jastukom",
                        products: ["Blagovaonska stolica s jastukom", "Baršunasta stolica", "Stolica s mekanim jastukom", "Stolica s debelim naslonom", "Jastučasta stolica"],
                    },
                    {
                        type: "bar",
                        products: ["Drveni barski stolac", "Metalni barski stolac", "Barski stolac s naslonom", "Visoki barski stolac", "Barski stolac s jastukom"],
                    },
                    {
                        type: "uredska",
                        products: ["Uredska stolica", "Ergonomska stolica", "Stolica za rad", "Uredska stolica s mrežom", "Uredska stolica s jastucima"],
                    },
                ],
            },
            ormar: {
                podvrste: [
                    {
                        type: "ugradbeni",
                        products: ["Ugradbeni ormar", "Ormarić s kliznim vratima", "Modularni ugradbeni ormar", "Ugradbeni ormar s policama", "Veliki ugradbeni ormar"],
                    },
                    {
                        type: "masivni_drvo",
                        products: ["Masivni drveni ormar", "Klasični drveni ormar", "Rustikalni drveni ormar", "Masivni ormar s ladicama", "Masivni ormar s ogledalom"],
                    },
                    {
                        type: "s_ogledalom",
                        products: ["Ormarić s ogledalom", "Ormar s ogledalom", "Veliki ogledalo ormar", "Ormar s dvostrukim ogledalom", "Ogledalo ormar s ladicama"],
                    },
                ],
            },
            krevet: {
                podvrste: [
                    {
                        type: "bračni_s_ladicama",
                        products: ["Okvir kreveta s ladicama", "Platforma krevet s ladicama", "Krevet s dodatnim ladicama", "Bračni krevet s kutijama", "Krevet s ladicama za posteljinu"],
                    },
                    {
                        type: "kovano_željezo",
                        products: ["Krevet od kovanog željeza", "Antikni okvir kreveta", "Romantični željezni krevet", "Željezni krevet s ukrasima", "Luksuzni željezni krevet"],
                    },
                    {
                        type: "na_kat",
                        products: ["Krevet na kat", "Dvostruki krevet na kat", "Modularni krevet na kat", "Krevet na kat s ladicama", "Krevet na kat za djecu"],
                    },
                ],
            },
        };

        const productData = {
            "Moderni krevet na razvlačenje": {
              description: "A modern pull-out bed with a sleek design and comfortable mattress.",
              price: "€500",
              material: "Fabric",
            },
            "Pretvorivi kauč": {
              description: "A convertible couch that can turn into a bed, perfect for saving space.",
              price: "€600",
              material: "Leather",
            },
            "Kožna kutna garnitura": {
              description: "A luxurious leather corner sofa with soft cushions, offering both comfort and style.",
              price: "€1200",
              material: "Leather",
            },
            "Talijanski kožni naslonjač": {
              description: "An Italian leather armchair, designed for elegance and comfort.",
              price: "€800",
              material: "Leather",
            },
            "Kutna garnitura": {
              description: "A spacious corner sofa that fits into any living room, with soft seating for multiple people.",
              price: "€950",
              material: "Fabric",
            },
            "Kompaktni kutni kauč": {
              description: "A compact corner sofa, ideal for smaller spaces but still offering comfort.",
              price: "€700",
              material: "Fabric",
            },
          
            "Hrastov blagovaonski stol": {
              description: "A rustic oak dining table, perfect for family gatherings or intimate dinners.",
              price: "€450",
              material: "Oak wood",
            },
            "Rustikalni drveni stol": {
              description: "A handcrafted wooden dining table, bringing a vintage feel to your dining room.",
              price: "€400",
              material: "Pine wood",
            },
            "Stakleni stolić za kavu": {
              description: "A modern glass coffee table with minimalist design, perfect for a contemporary living room.",
              price: "€250",
              material: "Glass and metal",
            },
            "Moderni stakleni blagovaonski stol": {
              description: "A sleek, glass dining table with a contemporary design to match any modern decor.",
              price: "€550",
              material: "Glass and stainless steel",
            },
            "Skandinavski radni stol": {
              description: "A Scandinavian-inspired work desk, combining functionality with minimalist aesthetics.",
              price: "€350",
              material: "Wood",
            },
            "Minimalistički nordijski stol": {
              description: "A nordic-style desk with clean lines, ideal for a modern home office.",
              price: "€375",
              material: "Wood and metal",
            },
          
            "Blagovaonska stolica s jastukom": {
              description: "A comfortable dining chair with a cushioned seat, ideal for long dinners.",
              price: "€120",
              material: "Wood and fabric",
            },
            "Baršunasta stolica": {
              description: "A luxurious velvet dining chair with a plush cushion, adding elegance to any room.",
              price: "€150",
              material: "Velvet and wood",
            },
            "Drveni barski stolac": {
              description: "A sturdy wooden bar stool, combining comfort and durability for your kitchen or bar.",
              price: "€90",
              material: "Wood",
            },
            "Metalni barski stolac": {
              description: "A sleek metal bar stool with a modern design, perfect for a stylish bar setup.",
              price: "€95",
              material: "Metal",
            },
            "Ergonomska uredska stolica": {
              description: "An ergonomic office chair, designed to provide comfort and support during long hours of work.",
              price: "€250",
              material: "Mesh and plastic",
            },
            "Uredska stolica s mrežastim naslonom": {
              description: "A modern office chair with a breathable mesh back and adjustable height for comfort.",
              price: "€220",
              material: "Mesh and fabric",
            },
          
            "Ugradbeni ormar": {
              description: "A custom-built wardrobe designed to fit perfectly into your space, with plenty of storage.",
              price: "€1200",
              material: "Wood",
            },
            "Ormarić s kliznim vratima": {
              description: "A space-saving wardrobe with sliding doors, ideal for smaller rooms.",
              price: "€950",
              material: "Wood and glass",
            },
            "Masivni drveni ormar": {
              description: "A heavy-duty wooden wardrobe with a classic design and ample space for your clothes.",
              price: "€1500",
              material: "Solid wood",
            },
            "Klasični drveni ormar": {
              description: "A traditional wooden wardrobe with shelves and hanging space for all your needs.",
              price: "€1300",
              material: "Wood",
            },
            "Ormarić s ogledalom na vratima": {
              description: "A stylish cabinet with a mirror on the door, offering both storage and functionality.",
              price: "€700",
              material: "Wood and glass",
            },
            "Ormarić s cijelom dužinom ogledala": {
              description: "A wardrobe with a full-length mirror on the door, perfect for a modern bedroom.",
              price: "€850",
              material: "Wood and mirror glass",
            },
          
            "Okvir kreveta s ladicama": {
              description: "A bed frame with built-in storage drawers, perfect for organizing your bedroom.",
              price: "€650",
              material: "Wood",
            },
            "Platforma krevet s ladicama": {
              description: "A platform bed with drawers underneath for extra storage, offering both function and style.",
              price: "€700",
              material: "Wood",
            },
            "Krevet od kovanog željeza": {
              description: "A classic wrought iron bed frame, ideal for a vintage or industrial style bedroom.",
              price: "€800",
              material: "Wrought iron",
            },
            "Antikni okvir kreveta od željeza": {
              description: "An antique-style bed frame made of iron, adding a rustic touch to your room.",
              price: "€950",
              material: "Iron",
            },
            "Krevet na kat": {
              description: "A bunk bed designed to save space, ideal for children's rooms or guest rooms.",
              price: "€600",
              material: "Wood",
            },
        };
          

        for (const [categoryName, categoryData] of Object.entries(furnitureData)) {
            const category = new Category({ name: categoryName });
            await category.save();

            for (const subcategoryData of categoryData.podvrste) {
                const subcategory = new Subcategory({
                    name: subcategoryData.type,
                    category: category._id,
                });
                await subcategory.save();

                category.subcategories.push(subcategory._id);

                for (const productName of subcategoryData.products) {
                    const productDetails = productData[productName];
                
                    if (!productDetails) {
                        console.error(`Missing details for product: ${productName}`);
                        continue;
                    }
                
                    const product = new Product({
                        name: productName,
                        description: productDetails.description,
                        price: productDetails.price,
                        material: productDetails.material,
                        subcategory: subcategory._id,
                    });
                    await product.save();
                    console.log("Saved product:", product);
                
                    subcategory.products.push(product._id);
                }                
                await subcategory.save();
            }
            await category.save();
        }

        console.log("Database seeded successfully");
        process.exit();
    } catch (err) {
        console.error("Error seeding the database:", err);
        process.exit(1);
    }
};

seedDatabase();
