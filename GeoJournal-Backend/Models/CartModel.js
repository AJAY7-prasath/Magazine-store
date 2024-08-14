const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    title: String,
    quantity: Number,
    price: Number,
    img: String,
    toPay: Number,
});

module.exports = mongoose.model("Cart", CartSchema);
