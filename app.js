const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

const index = require('./routes/index');
const user = require('./routes/user');
const event = require('./routes/event')

app.use('/', index);
app.use('/users', user);
app.use('/events', event);

app.listen(port, () => console.log(`Servidor rodando em ${port}`));

module.exports = app;