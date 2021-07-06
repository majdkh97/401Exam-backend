const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteDrink = new Schema({
    name: String,
    img_path: String,
});

const drinkModel = mongoose.model('Favorite', favoriteDrink);



module.exports = { drinkModel };