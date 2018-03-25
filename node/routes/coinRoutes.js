/**
* Router definition for add, edit, delete
*/
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

/**
* Invoke the model
*/
const Coin = require('../models/coin');

/**
* Declare GET router to fetch all items from database
*/
router.get('/', (req, res, next) => {
	Coin.find(function (err, coins) {
		if (err) {
			console.log(err);
		} else {
			res.status(200).json(coins);
		}
	});
});

/**
* Declare POST router to add a new item
*/
router.post('/', (req, res, next) => {
	const coin = new Coin({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		price: req.body.price
	});
	coin.save().then(result => {
		console.log(result);
	}).catch(err => console.log(err));
	res.status(201).json({
		message: "Handling POST request",
		createCoin: coin
	});
});

/**
* Route to get coin by ID
*/
router.route('/edit/:id').get(function(req, res) {
	var id = req.params.id;
	Coin.findById(id, function(err, coin) {
		res.json(coin);
	});
});

/**
* Route to update a coin
*/
router.route('/update/:id').post(function(req, res) {
	var id = req.params.id;
	Coin.findById(id, function(err, coin) {
		if(!coin) {
			return next(new Error('Could not find the coin'));
		} else {
			coin.name = req.body.name;
			coin.price = req.body.price;
			coin.save().then(coin => {
				res.json('Coin updated successfully');
			}).catch(err => {
				res.status(400).send('Failed to update the Coin')
			});
		}
	});
});

router.route('/delete/:id').get(function(req, res) {
	Coin.findByIdAndRemove({_id: req.params.id}, function(err, coin) {
		if(err) {
			res.json(err);
		} else {
			res.json('Coin removed successfully');
		}
	});
});

module.exports = router