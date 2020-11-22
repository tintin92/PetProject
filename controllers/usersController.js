const User = require("../models/user");
const passport = require('passport');

module.exports = {
	getUser: function (req, res) {
		const { user } = req.session.passport

		if (user) {
			User.findOne({ username: user })
				.then(userData => {
					console.log(userData);
					const { _id, username } = userData;
					return res.status(200).json({
						id: _id,
						username,
						authenticated: true
					})
				})
		} else {
			return res.status(401).json({
				error: 'User is not authenticated',
				authenticated: false
			});
		}
	},

	register: function (req, res, next) {
		console.log('/register handler', req.body);
		User.register(new User({ username: req.body.username }), req.body.password, (err, User) => {
			if (err) {
				return res.status(500).send({ error: err.message });
			}
			passport.authenticate('local')(req, res, () => {
				req.session.save((err) => {
					if (err) {
						//ToDo:log the error and look for an existing user
						return next(err);
					}
					res.send(200, "successful register");
				});
			});
		});
	},

	login: function (req, res, next) {
		console.log('/login handler');
		if (!req.session.passport.user) {
			return false;
		}
		req.session.save((err) => {
			if (err) {
				return next(err);
			}
			console.log(`User at login ${req.user.username}`);

			res.status(200).json({ test: " testvalue" });
		});
	},
	logout: function (req, res, next) {
		req.logout();
		req.session.save((err) => {
			if (err) {
				return next(err);
			}
			res.status(200).send('OK');
		});
	},

	getUsers: function (req, res) {
		User.find()
			.then(results => res.send(results))
	}

};