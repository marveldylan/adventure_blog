const mongoose = require('mongoose')
const BlogSchema = require('./Blog')
const CommentSchema = require('./Comment')
const ReviewSchema = require('./Review')

const Blog = mongoose.model('blog', BlogSchema)
const Comment = mongoose.model('checkout', CommentSchema)
const Review = mongoose.model('reviews', ReviewSchema)


module.exports = {
  Blog,
  Comment,
  Review
}
