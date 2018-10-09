const express = require('express');
const router = express.Router();
const eventController = require('./eventController');

router.get('/', eventController.index);

router.get('/:event_id', eventController.show);

router.post('/', eventController.create);

router.put('/:event_id', eventController.update);

router.delete('/:event_id', eventController.delete);

router.get('user/:user_id/', eventController.eventByUser);

module.exports = router;
