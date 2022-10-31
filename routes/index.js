var express = require('express');
var router = express.Router();
var passport = require('passport');
var ensureLoggedIn = require('../config/ensureLoggedIn');
var postCntrl = require('../controllers/posts')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Live Más!' });
});


//? What is this?
router.get('/', function(req, res, next) {
  res.redirect('/users');
});

// Log in
router.get('/auth/google', passport.authenticate(
  // which passport stategy to use
  'google',
  {
    scope: ['profile', 'email'],
    //optional
    prompt: 'select_account'
  }
));
//Log in Step 2
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    //this is if the user accepts the auth or denies it.
    successRedirect: '/users',
    failureRedirect: '/users'
  }
));
//LogOut
router.get('/logout', function(req, res) {
  req.logOut(function() {
    res.redirect('/users')
  });

});
module.exports = router;


