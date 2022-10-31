var express = require('express');
var router = express.Router();
var ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/index', { title: 'Home Page' });
});


module.exports = router;
