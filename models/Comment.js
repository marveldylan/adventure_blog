const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    msg: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = Comment
