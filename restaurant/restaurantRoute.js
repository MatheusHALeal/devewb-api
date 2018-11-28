const express = require('express');
const router = express.Router();
const restaurantController = require('./restaurantController');

router.get('/', restaurantController.index);

router.get('/:restaurant_id', restaurantController.show);

router.post('/', restaurantController.create);

router.put('/:restaurant_id', restaurantController.update);

router.delete('/:restaurant_id', restaurantController.delete);

module.exports = router;
