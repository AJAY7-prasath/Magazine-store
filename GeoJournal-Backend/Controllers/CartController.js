const CartModel = require("../Models/CartModel");

exports.saveCart = async (req, res) => {
    const { items, total, toPay } = req.body;

    try {
        const cartItems = items.map(item => ({
            title: item.title,
            quantity: item.quantity,
            price: item.price,
            img: item.img,
            toPay: parseFloat(toPay),
        }));

        await CartModel.insertMany(cartItems);

        res.status(200).json({ message: 'Cart saved successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save cart' });
    }
};
exports.getCart = async (req, res) => {
    try {
        const cartItems = await CartModel.find();
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve cart items' });
    }
};