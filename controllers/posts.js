const Post = require('../models/post');

module.exports = {
    index,
    create
};

function index(req, res) {
    res.render('posts/new', {title: 'Start the Discussion' });
};

function create(req, res) {
    const post = new Post(req.body);
    console.log(req.body);
    post.save(function(err) {
    if (err) return res.redirect('/posts');
    console.log(post);
    res.redirect('/posts')
    });
};