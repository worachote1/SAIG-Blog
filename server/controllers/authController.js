
const jwt = require('jsonwebtoken')
const login =(req,res)=>{
 
    const {username,password} = req.body
    //check admin username from env
    const admin_login_data = JSON.parse(process.env.ADMIN_DATA);
    if(username in admin_login_data){
          if(password === admin_login_data[username]){
            //username and password correct
            //then login
            const token = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'1d'})
            return res.json({token,username})
            // return res.json({username,"FD":"FDcorrect"})
          }
          else{
            return res.status(400).json({"err_login" : "You have entered incorrect password"})
          }  
    }
    else{
        // not found this user in admin data
        return res.status(400).json({"err_login" : "You have entered incorrect username"})
    }

    //test debug
    // let checkUser = username in admin_login_data
    // let checkPass = password === admin_login_data[username]
    // res.json({admin_login_data,username,password,checkUser,checkPass})

}


module.exports = { login }