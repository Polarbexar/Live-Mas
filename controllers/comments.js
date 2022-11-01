const Post = require('../models/post');
const { post } = require('../routes');

module.exports = {
    create,
    delete: deleteComment
}

function create(req, res) {
    Post.findById(req.params.id, function(err, post) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        console.log(req.body)
        post.comments.push(req.body);
        post.save(function(err, post) {
            res.redirect(`/posts/${post._id}`);
        })
    });
}

function deleteComment(req, res, next) {
    Post.findOne({
        'comments._id': req.params.id,
        'comments.user': req.user._id
    }).then(function (post) {
        if (!post) return res.redirect('/posts');
        post.comments.remove(req.params.id);
        post.save().then(function() {
            res.redirect(`/posts/${post.id}`);
        }).catch(function() {
            return next(err);
        })
    })
}