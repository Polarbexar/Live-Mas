const Post = require('../models/post');
const { post } = require('../routes');

module.exports = {
    index,
    create
};

function index(req, res, posts) {
    Post.find({}, function(err, posts) {
    res.render('posts/new', {title: 'Start the Discussion', posts });
    })
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