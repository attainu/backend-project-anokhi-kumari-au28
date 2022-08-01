const router=require('express').Router();
const path=require('path');
//const {isAuth}=require('../middleware')
const {getlogin,postlogin,postsignup,getsignup,getrooms}=require('../controller/admincontroller');


router.get('/login',getlogin)//getlogin request
router.post('/login',postlogin)
router.get('/login/getrooms',getrooms)//postlogin 
router.get('/login/main',(req,res)=>{
    return res.render('main')
})
router.get('/login/rooms',(req,res)=>{
    return res.render('rooms')
})
router.get('/login/gallery',(req,res)=>{
    return res.render('gallery')
})
router.get('/login/attraction',(req,res)=>{
    return res.render('attraction')
})
router.get('/login/room',(req,res)=>{
    return res.render('room')
})




router.get('/signup',getsignup)
router.post('/signup',postsignup)





module.exports=router;