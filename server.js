/* === Dependencies === */
const express = require("express");
const path = require("path");
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const routes = require('./routes/index');
const users = require("./routes/api/users")
/* === Set the PORT to work with deployment environment === */
const PORT = process.env.PORT || 3001;
/* === Call Express as app === */
const app = express();


/* === Middleware === */
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ limit: '16mb', extended: true }));
app.use(bodyParser.json({ limit: '16mb', extended: true }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(flash());


/* Serve up static assets (usually on heroku) */
if (process.env.NODE_ENV === "production") {
  app.use(passport.session());
  app.use(express.static(path.join(__dirname, './client/build')));

};

/* === Routing === */

app.use(routes);
app.use("/api/users", users);



/* === Express 404 error handler === */
app.use(function (req, res, next) {
  var err = new Error('404 in Server.js, route Not Found');
  err.status = 404;
  next(err);
});

/* === Server-Side Authentication w/passport.js on our Model === */
const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/* === Mongoose Connection === */
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Petfolio', { useNewUrlParser: true, useUnifiedTopology: true });

/* === Error Handling === */

/* Development error handler will print stacktrace */
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

/* Production error handler no stacktraces leaked to User */
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


/* === Telling Express to Listen === */
app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
