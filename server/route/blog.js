const express = require('express')
const router = express.Router()
const {create,getAllBlogs,getSingleBlog} = require('../controllers/blogController')

router.post('/create',create)
router.get('/blogs',getAllBlogs)
router.get('/blog/:slug',getSingleBlog)

module.exports = router