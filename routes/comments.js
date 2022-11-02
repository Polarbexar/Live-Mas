var express = require('express');
var router = express.Router();
var passport = require('passport');
var ensureLoggedIn = require('../config/ensureLoggedIn');
var commentsCtrl = require('../controllers/comments')

//Post posts/:id - Add comment
router.post('/posts/:id/comments', ensureLoggedIn, commentsCtrl.create);
//Delete comments/:id - Delete comment
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);
//Put /comments/:id - Edit Comment


module.exports = router;