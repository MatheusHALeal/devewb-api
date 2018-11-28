const User = require('./user');
const OK_STATUS = 200;
const BAD_REQUEST_STATUS = 400;
const FORBIDDEN_STATUS = 403;


exports.index = (req, res) => {
  User.find({})
	  .catch((err) => {
	    res.status(BAD_REQUEST_STATUS).send(err);
	  })
	  .then((result) => {
	    res.status(OK_STATUS).json(result);
	  });
};

exports.show = (req, res) => {
	User.findById(req.params.user_id)
		.then((user) => {
			res.status(OK_STATUS).json(user);
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).json(error);
		});
};

exports.create = (req, res) => {
  var user = new User(req.body);

  user.generateHash(req.body.password)
  	.then((hash) => {
  		user.password = hash;
  		user.save((err) => {
  			if (err && err.name === 'MongoError' && err.code === 11000) {
					res.status(FORBIDDEN_STATUS).send(err);
        } else {
          res.status(OK_STATUS).send('User created.');
        }
  		});
  	})
  	.catch((error) => {
  		res.status(BAD_REQUEST_STATUS).send(err);
  	});
};

exports.update = (req, res) => {
	User.updateOne({ _id: req.params.user_id }, { $set: req.body })
		.then(() => {
			res.status(OK_STATUS).send('User updated!');
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).json(error);
		});
};

exports.delete = (req, res) => {
	User.deleteOne({ _id: req.params.user_id })
		.then(() => {
			res.status(OK_STATUS).send('User deleted.');
		})
		.catch((error) => {
			res.status(BAD_REQUEST_STATUS).send(error);
		});
};

exports.getUserByEmail = (userEmail) => {
    return User.findOne({'email': userEmail});
};
