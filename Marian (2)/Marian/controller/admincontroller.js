
const jwt=require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {mongooseUrl}=require('../database/logindb');
const users=require('../models/loginModel.js');


function getlogin(req,res){
  res.render('login')
}


async function postlogin(req,res){
  mongooseUrl();
  const {email,password}=req.body;
  const user=await users.findOne({email}).lean();
  
   if(!user){
    return res.send('Invalid Username/Password');
   }
   if(await bcrypt.compare(password,user.hashPassword)){
    const payload={
           email:user.email,
           id:user._id   
           
        };
        const secret='mysecret'
       var token=jwt.sign(payload,secret,{expiresIn:'5h'})
     
      
     
    
     return res.render('main')
   }
    

 
         
}
function getsignup(req,res){
  res.render('signup')
}

async function postsignup(req,res){
  mongooseUrl();

    const {email,password}=req.body;
    const hashPassword=await bcrypt.hash(password, 10);

    if(!email || typeof email!=='string'){
      return res.send('Invalid EmailId')
    }
    if(!password || typeof password!=='string'){
      return res.send('Invalid password')
    }

    try{

     const result= await users.create({
        email,
        hashPassword
      })
     // console.log(res)
      return res.render('login');
    }catch(error){
     if(error.code==11000){
      res.send('EmailId Already exist');
      return res.render('login')
     }
     throw error
    }
   

}

async function getrooms(req,res){
 return res.render('main')
}

module.exports={postsignup,postlogin,getlogin,getsignup,getrooms}
