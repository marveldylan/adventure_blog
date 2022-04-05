const { Blog, Comment } = require('../models/index')
const { add } = require('../models')

const getAllBlog = async (req, res) => {
  try {
    const blog = await Blog.find()
    return res.status(201).send(blog)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllBlog
}
