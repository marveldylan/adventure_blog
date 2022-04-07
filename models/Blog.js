const { Schema } = require('mongoose')

const Blog = new Schema(
  {
    image: { type: String },
    title: { type: String, required: false },
    post: { type: String, required: false },
    rating: { type: Number, required: false },
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review', required: false }],
    comments: [{ type: Schema.Types.ObjectId, required: false }],
    likes: { type: Number, required: false}
  },
  { timestamps: true }
)

module.exports = Blog
