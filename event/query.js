const express = require('express');
const router = express.Router();
const eventController = require('./eventController');

router.get('/', eventController.searchEvents);

module.exports = router;
