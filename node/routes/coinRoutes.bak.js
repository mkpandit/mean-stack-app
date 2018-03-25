/**
* coinRoutes.js - Router definition for Node API
*/

var express = require('express');
var app = express();

var coinRoutes = express.Router();
var Coin = require('./Coin');

/**
* Route for adding a coin
*/
coinRoutes.route('/add').post(function (req, res) {
	var coin = new Coin(req.body);
	coin.save().then(then => {
		res.status(200).json({'coin': 'Coin added successfully'});
	}).catch(err => {
		res.status(400).send('Failed to add coin');
	});
});

/**
* Route to get coins
*/
coinRoutes.route('/').get(function (req, res) {
	Coin.find(function (err, coins) {
		if (err) {
			console.log(err);
		} else {
			res.json(coins);
		}
	});
});

/**
* Route to get coin by ID
*/
coinRoutes.route('/edit/:id').get(function(req, res) {
	var id = req.params.id;
	Coin.findById(id, function(err, coin) {
		res.json(coin);
	});
});

/**
* Route to update a coin
*/
coinRoutes.route('/update/:id').post(function(req, res) {
	Coin.findById(req.params.body, function(err, coin) {
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

coinRoutes.route('/delete/:id').get(function(req, res) {
	Coin.findByIdAndRemove({_id: req.params.id}, function(err, coin) {
		if(err) {
			res.json(err);
		} else {
			res.json('Coin removed successfully');
		}
	});
});

module.exports = coinRoutes;