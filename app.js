var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');
//var mongo = require('mongodb');

//import le mongoose
var mongoose = require('mongoose');

//Connexion à la base avec mongoose
var mongoDB = 'mongodb://localhost/facecast';
mongoose.connect(mongoDB, {
  useMongoClient: true
});

//Connexion par defaut
var db = mongoose.connection;

//Au cas ou il y aurait une erreur
db.on('erreur', console.error.bind(console, 'MongoDB connection error: '));

var index = require('./routes/index');
var users = require('./routes/users');
var contenuOffre = require('./routes/contenuOffre');
var contenuFigurant = require('./routes/contenuFigurant');
var ajout = require('./routes/ajout');
var suppr = require('./routes/delete');
var update = require('./routes/update');
var candidature = require('./routes/candidature');
var rest = require('./rest/rest');
var app = express();

//Ceci permet de bien indenter dans le code source internet
app.locals.pretty = true;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
  req.db = db;
  next();
});


app.use('/', index);
app.use('/users', users);
app.use('/offre', contenuOffre);
app.use('/figurant', contenuFigurant);
app.use('/add', ajout);
app.use('/delete', suppr);
app.use('/update', update);
app.use('/candidature', candidature);
app.use('/rest', rest);

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
