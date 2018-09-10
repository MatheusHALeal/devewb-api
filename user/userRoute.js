const express = require('express');
const router = express.Router();
const controller = require('./userController');

router.get('/', controller.get);
router.get('/:id', controller.get);
router.put('/registration', controller.signup);
router.post('/login', controller.signin);

module.exports = router;
