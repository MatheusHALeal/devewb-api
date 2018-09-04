const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.use('/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

router.get('/', controller.get);
router.get('/:id', controller.get);
router.put('/registration', controller.signup);
router.post('/login', controller.signin);

module.exports = router;
