const express = require('express'),
    app = express(),
    router = express.Router(),
    PORT = process.env.PORT || 3000,
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    cache = require('memory-cache');
    user = require('./user/userRoute');
    events = require('./event/eventRoute');
    restaurant = require('./restaurant/restaurantRoute');
    index = require('./index');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();  // sem o next, a chamada para aqui
});


//ROUTES

app.use(morgan('tiny'));
app.use('/', index);
app.use('/user', user);
app.use('/event', events);
app.use('/restaurant', restaurant);
app.use('/static',express.static(__dirname+'/static'));

//RUN

app.listen(PORT, () => console.log(`Servidor rodando em ${PORT}`));

module.exports = app;
