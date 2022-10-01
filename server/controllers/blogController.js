//conect to Database
const Blogs = require("../Model/blogs")
const slugify = require('slugify')
const { v4: uuidv4 } = require('uuid');

//save data
const create = (req, res) => {
    const { title, content, prn_type, author } = req.body
    let slug = slugify(title)

    //if title not eng
    if (!slug) {
        slug = uuidv4();
    }

    //validate
    if (!title) {
        return res.status(400).json({ msg_error: "please , enter title" })
    }
    if (!content) {
        return res.status(400).json({ msg_error: "please , enter content" })
    }

    //save to database
    Blogs.create({ title, content, prn_type, author, slug }, (err, blog) => {
        //failed save
        if (err) {

            res.status(400).json({ msg_error: "duplicate title" })
        }
        res.json(blog)
    })
}

//Get all data
const getAllBlogs = (req, res) => {
    Blogs.find().sort({ createdAt: -1 }).exec((err, blogs) => {
        res.json(blogs)
        console.log("test getAllBlog : ")
        console.log(blogs)
    })
}

//Get a single blog using slug
const getSingleBlog = (req, res) => {

    console.log("test show 44 -> ")
    console.log(req)
    const { slug } = req.params
    Blogs.findOne({ slug }).exec((err, blog) => {
        res.json(blog)
    })
}

//remove data
const remove = (req, res) => {
    const { slug } = req.params
    Blogs.findOneAndDelete({ slug }).exec((err, blog) => {

        res.json({ msg: "Remove success !", slug: slug })
    })

}

//update data
const update = (req, res) => {
    const { title, content, prn_type, author } = req.body
    const { slug } = req.params
    
    Blogs.findOneAndUpdate({ slug }, {  title,content,prn_type, author }, { new: true }).exec((err, blog) => {
      
        //validate Update blog
        if (!title) {
            return res.status(400).json({ msg_error: "please , enter title" })
        }
        if (!content) {
            return res.status(400).json({ msg_error: "please , enter content" })
        }
        res.json(blog)
    })

}

//export function
module.exports = { create, getAllBlogs, getSingleBlog, remove, update }