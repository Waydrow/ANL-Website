/**
 * This is the app file of `ANL Website`.
 *
 * @name      app.js
 * @summary   App file of this project
 * @link      app.js
 * @since     2016-08-02
 * @author    Shilei Tian <tianshilei@sjtu.edu.cn>
 */

// 3rd party modules
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var config = require('./configs/config');
var routes = require('./routes/index');
var api = require('./routes/api');
var auth = require('./configs/config').auth;

var app = express();

mongoose.connect(config.mongodb.url, function (err) {
    if (err) {
        console.error('mongodb connection error');
        process.exit(1);
    } else {
        console.log('mongodb connected');
    }
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Enable the middleware
app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
app.use(cookieParser());

// Static route
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(path.join(__dirname, 'public')));

// Dynamic route
app.use('/', routes);
app.use('/api', auth, api);

// handle 404
app.use(function (req, res, next) {
    res.status(404).render("error", {status: 404});
});

//  handle error
app.use(function (err, req, res, next) {
    console.error(err);
    if (err.status) {
        res.status(err.status).render("error", {status: err.status});
    } else {
        res.status(404).render("error", {status: 404});
    }
});

module.exports = app;

app.listen(12475);
