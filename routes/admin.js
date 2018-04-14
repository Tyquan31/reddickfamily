const express = require('express');
const mngoose = require('mongoose');
const BabyRsvp = require('../models/BabyRsvp');
const WeddingRsvp = require('../models/WeddingRsvp');
var router = express.Router();

router.get('/dashboard', (req, res, next) => {
	BabyRsvp.find().then((babies) => {
		WeddingRsvp.find().then((weddings) => {
			res.render('admin/dashboard', {
				babyRsvps: babies,
				weddingRsvps: weddings
			});
		}).catch((err) => {
			throw err;
		});
	}).catch((err) => {
		throw err;
	});
});

router.get('/showwedding/:id', (req, res, next) => {
	WeddingRsvp.findById(req.params.id, (err, data) => {
		if (err) {
			throw err;
			next();
		} else {
			res.render('admin/showwedding', {
				wedding: data
			});
			next();
		}
	});
});

router.get('/showbaby/:id', (req, res, next) => {
	BabyRsvp.findById(req.params.id, (err, data) => {
		if (err) {
			throw err;
			next();
		} else {
			res.render('admin/showbaby', {
				baby: data
			});
			next();
		}
	});
});

module.exports = router;