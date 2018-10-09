const Restaurant = require('./restaurant');
const OK_STATUS = 200;
const BAD_REQUEST_STATUS = 400;
const FORBIDDEN_STATUS = 403;


exports.index = (req, res) => {
  Restaurant.find({})
	  .catch((err) => {
	    res.status(BAD_REQUEST_STATUS).send(err);
	  })
	  .then((result) => {
	    res.status(OK_STATUS).json(result);
	  });
};

exports.show = (req, res) => {
	Restaurant.findById(req.params.restaurant_id)
		.then((entertainment) => {
			res.status(OK_STATUS).json(entertainment);
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).json(error);
		});
};

exports.create = (req, res) => {
  var entertainment = new Event(req.body);

	entertainment.save((err) => {
		if (err && err.name === 'MongoError' && err.code === 11000) {
			res.status(FORBIDDEN_STATUS).send(err);
    } else {
      res.status(OK_STATUS).send('Restaurant created.');
    }
	});
};

exports.update = (req, res) => {
	Restaurant.updateOne({ _id: req.params.restaurant_id }, { $set: req.body })
		.then(() => {
			res.status(OK_STATUS).send('Restaurant updated!');
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).json(error);
		});
};

exports.delete = (req, res) => {
	Restaurant.deleteOne({ _id: req.params.restaurant_id })
		.then(() => {
			res.status(OK_STATUS).send('Restaurant deleted.');
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).send(error);
		});
};
