const express = require("express");
const router = express.Router();

router.get('/restaurants', function(req, res) {

	const data = req.app.get('restaurantData');
	const pageRestaurants = data.restaurants;

	res.render('restaurants', {
		pageTitle: 'Restaurants',
		pageID: 'restaurants',
		restaurants: pageRestaurants,
	});
});

module.exports = router;