const express = require("express");
const router = express.Router();
const CartController = require("../Controllers/CartController");

router.post('/save-cart', CartController.saveCart);
router.get('/get-cart', CartController.getCart);
module.exports = router;
