var express = require('express');
var router = express.Router();
var passport = require('passport');
var ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function(req, res, next) {
  res.redirect('/users');
});

router.get('/auth/google', passport.authenticate(
  // which passport stategy to use
  'google',
  {
    scope: ['profile', 'email'],
    //optional
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    //this is if the user accepts the auth or denies it.
    successRedirect: '/users',
    failureRedirect: '/users'
  }
));

router.get('/logout', function(req, res) {
  req.logOut(function() {
    res.redirect('/users')
  });

});
module.exports = router;


