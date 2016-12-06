const express = require('express');
const reload = require('reload');
const app = express();
const dataFile = require('./data/restaurants.json');

app.set('port', process.env.PORT || 3000);
app.set('restaurantData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = 'Restaurants App';

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/about'));
app.use(require('./routes/restaurants'));
app.use(require('./routes/api'));

const server = app.listen(app.get('port'), function() {
	console.log(`Listening on Port: ${app.get('port')}`);
});

reload(server, app);