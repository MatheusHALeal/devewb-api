const express = require('express');
const router = express.Router();
const controller = require('./restaurantController');

router.get('/', controller.get);
router.get('/:id', controller.get);
router.put('/', controller.put);
router.post('/:id', controller.post);
router.delete('/:id', controller.delete);

module.exports = router;
