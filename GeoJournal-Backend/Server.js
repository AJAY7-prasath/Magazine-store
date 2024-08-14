const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cartRoutes = require('./Routers/CartRouter');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://ajayprasatha2022csbs:8cftbwqKz7YYlNqA@cluster0.uhjyebr.mongodb.net/Cart-Detail")
    .then(() => {
        console.log("Connected to Database");
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });

app.use('/cart', cartRoutes);

app.listen(5000, () => {
    console.log('Backend server is running on port 5000');
});
