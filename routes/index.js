const { Router } = require('express')
const controllers = require('../controllers/index')
const router = Router()

router.get('/blogpost', controllers.getAllBlog)

module.exports = router
