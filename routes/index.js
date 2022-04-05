const { Router } = require('express')
const controllers = require('../controllers/index')
const router = Router()

router.get('/blogpost', controllers.getAllBlogs)

module.exports = router
