const express = require('express')
const router = express.Router()
const {create,getAllBlogs,getSingleBlog,remove,update} = require('../controllers/blogController')

const {requireLogin} = require('../controllers/authController')

router.post('/create',create)

//must log in to request API for get all blogs
router.get('/blogs',requireLogin,getAllBlogs)

router.get('/blog/:slug',getSingleBlog)
router.delete('/blog/:slug',remove)
router.put('/blog/:slug',update)

module.exports = router