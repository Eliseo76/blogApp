var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//MONGOOSE /MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model('Blog', blogSchema);

// Blog.create({
//   title: "Test Blog",
//   image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//   body: "HELLO THIS IS A BLOG POST!"
// });

//RESTFUL ROUTES

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect('/blogs');
});

router.get('/blogs', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if (err) {

            console.log('ERROR!')
        } else {
            res.render('index', {blogs: blogs});
        }
    })
});







module.exports = router;
