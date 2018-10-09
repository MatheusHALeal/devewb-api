const Event = require('./event');
const OK_STATUS = 200;
const BAD_REQUEST_STATUS = 400;
const FORBIDDEN_STATUS = 403;


exports.index = (req, res) => {
  Event.find({})
	  .catch((err) => {
	    res.status(BAD_REQUEST_STATUS).send(err);
	  })
	  .then((result) => {
	    res.status(OK_STATUS).json(result);
	  });
};

// exports.eventByUser = (req, res) => {
//   Event.find({'email': userEmail})
// 	  .catch((err) => {
// 	    res.status(BAD_REQUEST_STATUS).send(err);
// 	  })
// 	  .then((result) => {
// 	    res.status(OK_STATUS).json(result);
// 	  });
// };


exports.show = (req, res) => {
	Event.findById(req.params.event_id)
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
      res.status(OK_STATUS).send('Event created.');
    }
	});
};

exports.update = (req, res) => {
	Event.updateOne({ _id: req.params.event_id }, { $set: req.body })
		.then(() => {
			res.status(OK_STATUS).send('Event updated!');
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).json(error);
		});
};

exports.delete = (req, res) => {
	Event.deleteOne({ _id: req.params.event_id })
		.then(() => {
			res.status(OK_STATUS).send('Event deleted.');
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).send(error);
		});
};
