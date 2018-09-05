const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

const user = require('./user/userRoute');
const events = require('./event/eventRoute');
const restaurant = require('./restaurant/restaurantRoute');
const index = require('./index');


app.use('/', index);
app.use('/user', user);
app.use('/event', events);
app.use('/restaurant', restaurant);
app.use('/static',express.static(__dirname+'/static'));


app.listen(port, () => console.log(`Servidor rodando em ${port}`));

module.exports = app;
