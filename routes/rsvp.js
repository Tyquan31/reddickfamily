const express = require('express');
const mngoose = require('mongoose');
const BabyRsvp = require('../models/BabyRsvp');
const WeddingRsvp = require('../models/WeddingRsvp');
var router = express.Router();

router.get('/baby', (req, res) => {
	BabyRsvp.find().then((data) => {
		res.status(200).render('user/babyRsvp', {
			rsvps: data
		});
	}).catch((err) => {
		throw err;
	});
});
router.post('/baby', (req, res) => {
	let rsvp = new BabyRsvp(req.body);
	rsvp.save().then((data) => {
		res.status(200).render('index');
	}).catch((err) => {
		throw err;
	});
});

router.get('/wedding', (req, res) => {
	WeddingRsvp.find().then((data) => {
		res.status(200).render('user/weddingRsvp', {
			rsvps: data
		});
	}).catch((err) => {
		throw err;
	});
});
router.post('/wedding', (req, res) => {
	let rsvp = new WeddingRsvp(req.body);
	rsvp.save().then((data) => {
		res.status(200).render('index');
	}).catch((err) => {
		throw err;
	});
});

module.exports = router;