const mongoose = require('mongoose')
const BlogSchema = require('./Blog')
const CommentSchema = require('./Comment')

const Blog = mongoose.model('blog', BlogSchema)
const Comment = mongoose.model('checkout', CommentSchema)

module.exports = {
  Blog,
  Comment
}
