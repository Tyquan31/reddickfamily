const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

router.get('/wedding', (req, res, next) => {
    res.render('static/wedding');
});

router.get('/babyshower', (req, res, next) => {
    res.render('static/babyshower');
});

router.get('/babyrsvp', (req, res, next) => {
    res.render('static/babyrsvp');
});

router.get('/weddingrsvp', (req, res, next) => {
    res.render('static/weddingrsvp');
});

module.exports = router;