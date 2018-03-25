/**
* coin.js - Coin Schema
*/

const mongoose = require('mongoose');
const coinSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String,
	price: Number
});

module.exports = mongoose.model('Coin', coinSchema);