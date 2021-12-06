const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    namePD: {
        type: String,
        required: true
    },
    descriptionPD: {
        type: String,
        required: true
    },    
    price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
        required: true
    },
    imagePD: {
        type: String,
        required: true
    },
})

const Product = mongoose.model("product", productSchema);
module.exports = Product;