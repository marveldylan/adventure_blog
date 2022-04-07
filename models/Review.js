const { Schema } = require('mongoose')

const Review = new Schema(
  {
    name: { type: String, required: false },
    comment: { type: Schema.Types.ObjectId, ref: 'Comment', required: false },
    rating: { type: Number, min: 0, max: 5, required: false },
    date: { type: Date, required: false },
    blog: { type: Schema.Types.ObjectId, ref: 'Blog', required: false }
  },
  { timestamps: true }
)

module.exports = Review
