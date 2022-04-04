const express= require('express')
const route=express.Router();

const db= require('../models')
const fileUpload = require("../middleware/file-aploader");

const userContoller=require('../controlles/userController');

route.post('/register',(req,res,next)=>{

    userContoller.register(req.body.username,req.body.email,req.body.password)
    .then(response=>res.status(200).json(response))
    .catch(err=>res.status(400).json(err))
 
    
})

route.post('/login',(req,res,next)=>{

    userContoller.login(req.body.email,req.body.password)
    .then(token=>res.status(200).json({token:token}))
    .catch(err=>res.status(400).json({err}))
 

   
})


route.get('/user/:id',userContoller.getUser)
  
route.get('/users',userContoller.getAllUsers)

route.patch('/user/:id',userContoller.update);

route.delete('/user/:id',userContoller.delete);


route.post('/Add',(fileUpload.single("image")),userContoller.uploadImage);

route.post('/sendEmail',userContoller.sendEmail)



module.exports=route

