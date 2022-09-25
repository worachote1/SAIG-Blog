//conect to Database
const Blogs = require("../Model/blogs")
const slugify = require('slugify')

//save data
exports.create = (req,res)=>{
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
            res.status(400).json({msg_err44: err})
        }
        res.json(blog)
    })

}