const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventController');

router.use('/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});


router.get('/', controller.get);
router.get('/:id', controller.get);
router.put('/', controller.put);
router.post('/:id', controller.post);
router.delete('/:id', controller.delete);

module.exports = router;
