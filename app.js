const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

const index = require('./routes/index');
const user = require('./routes/user');
const events = require('./routes/event')


app.use('/', index);
app.use('/users', user);
app.use('/events', events);
app.use('/statics',express.static(__dirname+'/static'));


app.listen(port, () => console.log(`Servidor rodando em ${port}`));

module.exports = app;
