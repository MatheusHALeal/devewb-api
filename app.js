const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;


const index = require('./routes/index');
const user = require('./routes/user');

app.use('/user', user);
app.use('/', index);

app.listen(port, () => console.log(`Servidor rodando em ${port}`));

module.exports = app;