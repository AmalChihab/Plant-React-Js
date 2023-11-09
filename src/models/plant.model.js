const mongoose = require("mongoose");

// Schema for the Category collection
const categorySchema = new mongoose.Schema({
    name: String,
});

// Schema for the Plant collection
const plantSchema = new mongoose.Schema({
    name: String,
    // category: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Category",
    // },
    category: String,
    id: String,
    light: Number,
    water: Number,
    cover: String,
    price: Number,
});

//const Category = mongoose.model("Category", categorySchema);
const Plant = mongoose.model("Plant", plantSchema);

module.exports = {  Plant };