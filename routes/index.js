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

router.get('/contactus', (req, res, next) => {
    res.render('static/contactus');
});

module.exports = router;