const { Router } = require('express')
const controllers = require('../controllers/index')
const router = Router()

// blog routes

router.post('/blogpost', controllers.createNewBlog)

router.get('/blogpost', controllers.getAllBlog)

router.get('/blogpost/blogid', controllers.getBlogById)

router.put('/blogpost/blogid', controllers.updateBlog)

router.delete('/blogpost/blogid', controllers.deleteBlog)

// comment routes
router.post('/comment/:id', controllers.createNewComment)

router.get('/comment', controllers.getAllComments)

router.get('/comment/:id', controllers.getBCommentbyId)

router.put('/comment/:id', controllers.updateComment)

router.delete('/comment/:id', controllers.deleteComment)




module.exports = router
