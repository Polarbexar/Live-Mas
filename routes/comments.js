var express = require('express');
var router = express.Router();
var passport = require('passport');
var ensureLoggedIn = require('../config/ensureLoggedIn');
var commentsCtrl = require('../controllers/comments')

//Post posts/:id - Add comment
router.post('/:id/comments', commentsCtrl.create);

router.delete('/:id', commentsCtrl.delete);



module.exports = router;