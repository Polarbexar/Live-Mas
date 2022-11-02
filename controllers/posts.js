const { estimatedDocumentCount } = require('../models/post');
const Post = require('../models/post');


module.exports = {
    index,
    create,
    show,
    delete: deletePost,
    edit,
    update
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

function deletePost(req, res) {
    Post.findOneAndDelete(
      {_id: req.params.id}, function(err) {
        res.redirect('/posts');
      }
    );
  }

  function edit(req, res) {
    Post.findOne({_id: req.params.id}, function(err, post) {
      if (err || !post) return res.redirect('/posts');
      res.render('posts/edit', {
        title: 'post',
        post
        });
    });
  }

  function update(req, res) {
  Post.findOneAndUpdate(
    {_id: req.params.id, user: req.user._id},
    req.body,
    {new: true},
    function(err, post) {
      if (err || !post) return res.redirect('/posts');
      res.redirect(`/posts`);
    }
  );
}