//tile , content , prn_type ,author , slug(url)

const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title : {
        type:String,
        required : true
    },
    content : {
        type : {},
        required : true
    },
    prn_type : {
        type : String,
        default : "Art"
        // required : true
    },
    author:{
        type:String,
        default : "Admin"
    },
    slug : {
        type:String,
        lowerCase:true,
        unique:true
    }
    
},{timestamps: true})

const Blog = mongoose.model('Blog',blogSchema)