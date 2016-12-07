const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const restaurantData = require('../data/restaurants.json');

router.get('/api', function(req,res){
	res.json(restaurantData.restaurants);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function(req, res){
	restaurantData.restaurants.unshift(req.body);
	fs.writeFile('app/data/restaurants.json', JSON.stringify(restaurantData), 'utf8', function(err) {
		if (err) {
			console.log(err);
		}
	});
	res.json(restaurantData.restaurants);
});

router.delete('/api/:id', function(req, res) {
	restaurantData.restaurants.splice(req.params.id, 1);
	fs.writeFile('app/data/restaurants.json', JSON.stringify(restaurantData, 'utf8'), function(err) {
		if (err) {
			console.log(err);
		}
	});
	res.json(restaurantData.restaurants);
});

module.exports = router;