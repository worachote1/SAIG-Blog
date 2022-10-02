const { json } = require("react-router-dom")

//Save token and admin username --> in session storage
const authenticate = (res,next)=>{
    if(window !== "undefinded"){
        
        //save token
        sessionStorage.setItem("token",JSON.stringify(res.data.token))
        sessionStorage.setItem("username", JSON.stringify(res.data.username))
    }
    next()
}   

module.exports = {authenticate}