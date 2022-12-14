var express = require('express');
var router = express.Router();
var passport = require('passport');
var ensureLoggedIn = require('../config/ensureLoggedIn');
var postCntrl = require('../controllers/posts')


// Get posts
router.get('/', ensureLoggedIn, postCntrl.index);

//Post /posts Add Post
router.post('/new', ensureLoggedIn, postCntrl.create);

//GET /posts/:id/edit
router.get('/:id/edit', ensureLoggedIn, postCntrl.edit)

//PUT /posts/:id - Update Comment
router.put('/:id', ensureLoggedIn, postCntrl.update)

// get /posts/:id Page for Comments
router.get('/:id', postCntrl.show);

// delete posts/:id Delete Post
router.delete('/:id', ensureLoggedIn, postCntrl.delete);

module.exports = router;
