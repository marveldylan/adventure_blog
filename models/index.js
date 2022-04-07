const mongoose = require('mongoose')
const BlogSchema = require('./Blog')
const CommentSchema = require('./Comment')
const ReviewSchema = require('./Review')

const Blog = mongoose.model('blog', BlogSchema)
<<<<<<< HEAD
const Comment = mongoose.model('comment', CommentSchema)
=======
const Comment = mongoose.model('checkout', CommentSchema)
const Review = mongoose.model('reviews', ReviewSchema)
>>>>>>> ce4ad7ece826503bf5691f69214b5573259a5a49

module.exports = {
  Blog,
  Comment,
  Review
}
