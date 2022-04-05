const { Schema } = require('mongoose')

const Blog = new Schema(
  {
    image: { type: String },
    post: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Blog
