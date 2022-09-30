const express = require('express')
const router = express.Router()
const {create,getAllBlogs,getSingleBlog,remove} = require('../controllers/blogController')

router.post('/create',create)
router.get('/blogs',getAllBlogs)
router.get('/blog/:slug',getSingleBlog)
router.delete('/blog/:slug',remove)

module.exports = router