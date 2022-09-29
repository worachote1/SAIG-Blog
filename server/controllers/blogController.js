//conect to Database
const Blogs = require("../Model/blogs")
const slugify = require('slugify')
const blogs = require("../Model/blogs")

//save data
const create = (req,res)=>{
    const {title,content,prn_type,author} = req.body
    const slug = slugify(title)

    //validate
    if(!title){
        return res.status(400).json({msg_error : "please , enter title"})
    }
    if(!content){
        return res.status(400).json({msg_error : "please , enter content"})
    }
    
    //save to database
    Blogs.create({title,content,prn_type,author,slug},(err,blog)=>{
        //failed save
        if(err){

            res.status(400).json({msg_error: "duplicate title"})
        }
       res.json(blog)
    })
}

//Get all data
const getAllBlogs =(req,res)=>{
    Blogs.find().exec((err,blogs)=>{
        res.json(blogs)
        console.log("test getAllBlog : ")
        console.log(blogs)
    })
}

//export function
module.exports = {create,getAllBlogs}