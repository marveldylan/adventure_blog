const { Blog, Comment } = require('../models/index')
const { add } = require('../models')

const getAllBlogs = async (req, res) => {
  try {
    const blog = await Blog.find()
    return res.status(201).send(blog)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.blogid)
    return res.status(201).send(blog)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createNewBlog = async (req, res) => {
  try {
    const blog = await new Blog(req.body)
    await blog.save()
    return res.status(201).json({ blog })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.blogid, req.body, {
      new: true
    })
    res.json(blog)
  } catch (error) {
    res.send(error.message)
  }
}

const deleteBlog = async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.blogid)
    if (deleted) {
      return res.staus(200).send('Blog Deleted')
    }
    throw new Error('Blog Not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllComments = async (req, res) => {
  try {
    const comment = await Comment.find()
    return res.status(201).send(comment)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id)
    return res.status(201).send(comment)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createNewComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({ comment })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(comment)
  } catch (error) {
    res.send(error.message)
  }
}

const deleteComment = async (req, res) => {
  try {
    const deleted = await Comment.findByIdAndDelete(req.params.id)
    if (deleted) {
      return res.staus(200).send('Comment Deleted')
    }
    throw new Error('Comment Not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllBlogs,
  getBlogById,
  createNewBlog,
  updateBlog,
  deleteBlog,
  getAllComments,
  getBCommentById,
  updateComment,
  deleteComment
}
