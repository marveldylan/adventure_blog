const { Blog, Comment, Review } = require('../models/index')
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
      return res.status(200).send('Blog Deleted')
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

const getCommentById = async (req, res) => {
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
      return res.status(200).send('Comment Deleted')
    }
    throw new Error('Comment Not Found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {
  try {
    const blogId = req.body.blog
    const blog = await Blog.findById(blogId)
    const review = await new Review(req.body)
    let newRating =
      (blog.rating * blog.reviews.length + review.rating) /
      (blog.reviews.length + 1)
    await Blog.findByIdAndUpdate(blogId, {
      rating: newRating,
      reviews: [...blog.reviews, review._id]
    })
    await review.save()
    return res.status(201).json(review)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllReviews = async (req, res) => {
  try {
    const review = await Review.find()
    return res.status(201).send(review)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.blogid)
    return res.status(201).send(review)
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
  createNewComment,
  getCommentById,
  updateComment,
  deleteComment,
  createReview,
  getAllReviews,
  getReviewById
}
