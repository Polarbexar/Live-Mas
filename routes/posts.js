var express = require('express');
var router = express.Router();
var passport = require('passport');
var ensureLoggedIn = require('../config/ensureLoggedIn');
var postCntrl = require('../controllers/posts')


// Get posts
router.get('/', postCntrl.index);

//Post /posts Add Post
router.post('/new', postCntrl.create)

module.exports = router;
