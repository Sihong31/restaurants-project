const express = require("express");
const router = express.Router();

router.get('/about', function(req, res) {
		res.render('about', {
			pageTitle: 'About',
			pageID: 'about'
		});
});

module.exports = router;