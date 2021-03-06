const express = require('express');
const http = require('http');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var session = require('express-session');
const config = require('./config/config');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://tyquan:Jamela17!@ds223509.mlab.com:23509/reddickfamily', { 
  promiseLibrary: require('bluebird') 
})
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));

//mongodb://<dbuser>:<dbpassword>@ds223509.mlab.com:23509/reddickfamily

const index = require('./routes/index');
const rsvp = require('./routes/rsvp');
const auth = require('./routes/auth');
const admin = require('./routes/admin');

const app = express();
//app.use(compression());

app.set('superSecret', config.secret); // secret constiable
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: 'keysessionsaidding',
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 180 * 60 * 1000 }
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/rsvp', rsvp);
app.use('/auth', auth);
app.use('/admin', admin)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;