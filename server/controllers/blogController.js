//conect to Database
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
    
    res.json({
        data : {title,content,prn_type,author,slug}
    })
}