const { Router } = require('express')
const controllers = require('../controllers/index')
const router = Router()

// blog routes

// This works
router.post('/blogpost', controllers.createNewBlog)

//This Works!
router.get('/blogpost', controllers.getAllBlogs)

//This works!
router.get('/blogpost/:blogid', controllers.getBlogById)

// This works
router.put('/blogpost/:blogid', controllers.updateBlog)

// This works
router.delete('/blogpost/:blogid', controllers.deleteBlog)

// -----------------------------------------------------

// comment routes

//This works
router.post('/comment', controllers.createNewComment)

//This works
router.get('/comment', controllers.getAllComments)

//This works
router.get('/comment/:id', controllers.getCommentById)

//This works
router.put('/comment/:id', controllers.updateComment)

//This works!
router.delete('/comment/:id', controllers.deleteComment)

module.exports = router
