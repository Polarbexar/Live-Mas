const User = require('../models/user')
const Post = require('../models/post')

module.exports = {
    index,
}

function index(req, res) {
    Post.find({user: req.user._id}).populate('posts').exec(function(err, posts){
        res.render('users/index', { 
            title: 'Your Page', 
            posts
        })

    })
};