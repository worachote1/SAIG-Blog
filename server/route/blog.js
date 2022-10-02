const express = require('express')
const router = express.Router()
const {create,getAllBlogs,getSingleBlog,remove,update} = require('../controllers/blogController')

const {requireLogin} = require('../controllers/authController')

//must log in to request API for create blog (have token) 
router.post('/create',requireLogin,create)

//all user not (only admin) can request API for reading blogs (don't need token to send request)
router.get('/blogs',getAllBlogs)
router.get('/blog/:slug',getSingleBlog)

//must log in to request API for delete,update blog (have token) 
router.delete('/blog/:slug',requireLogin,remove)
router.put('/blog/:slug',requireLogin,update)

module.exports = router