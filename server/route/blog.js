const express = require('express')
const router = express.Router()
const {create,getAllBlogs,getSingleBlog,remove,update} = require('../controllers/blogController')
// const { updateMany } = require('../Model/blogs')

router.post('/create',create)
router.get('/blogs',getAllBlogs)
router.get('/blog/:slug',getSingleBlog)
router.delete('/blog/:slug',remove)
router.put('/blog/:slug',update)

module.exports = router