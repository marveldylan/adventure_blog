const { Schema } = require('mongoose')

const Blog = new Schema(
  {
    image: { type: String },
    title: { type: String, required: false },
    post: { type: String, required: false },
    comments: { type: Array, required: false }
  },
  { timestamps: true }
)

module.exports = Blog