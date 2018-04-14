const express = require('express');
const mngoose = require('mongoose');
const Admin = require('../models/Admin');
var router = express.Router();

router.get('/signup', (req, res, next) => {
	let admin = new Admin({
		username: 'admin',
		password: 'Rena'
	});
	admin.save().then((data) => {
		res.render('/admin/dashboard');
		next();
	}).catch((err) => {
		throw err;
		next();
	});
});

router.get('/login', (req, res, next) => {
	res.render('login');
	next();
});
router.post('/login', (req, res, next) => {
	Admin.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) {
            throw err;
        } else {
            if (!user) {
                console.log('User not in the databases');
                res.json({success: false, message: 'User not in the databases'});
            } else {
                // check the password
                if (user.password != req.body.password) {
                    console.log('Wrong Password');
                    res.json({success: false, message: 'Wrong Password'});
                } else {
                    // if user is found and password is right
                    console.log('User Found');
                    console.log();
                    req.session.user = user;
                    res.render('admin/dashboard');
                }
            }
        }
    });
})

module.exports = router;