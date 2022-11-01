const Post = require('../models/post');


module.exports = {
    index,
    create,
    show,
};

function index(req, res, posts) {
    Post.find({}, function(err, posts) {
    res.render('posts/new', {title: 'Start the Discussion', posts });
    })
};

function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;  
    req.body.userAvatar = req.user.avatar; 
    const post = new Post(req.body);
    console.log(req.body);
    post.save(function(err) {
    if (err) return res.redirect('/posts');
    console.log(post);
    res.redirect('/posts')
    });
};

function show(req, res) {
    Post.findById(req.params.id, function(err, post) {
        res.render('posts/show', {
            title: 'Post',
            post
        });
    });
};