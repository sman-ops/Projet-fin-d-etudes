const Joi=require('joi')
const db= require('../models')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

// send email
require('dotenv').config();
const nodemailer = require('nodemailer');

// to send mail using nodemailer we need what we call transporter
// transporter connect you to host domain 

const SchemaValidation = Joi.object({
    username:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required(),

})

exports.register=(username,email,password)=>{
    return new Promise((resolve,reject)=>{
        let validation=SchemaValidation.validate({username,email,password:password})
        if(validation.error){
            reject(validation.error.details[0].message)
        }
        // const {username,email,password}=req.body;
    db.User.count({where:{email:email}}).then((doc)=>{
        if(doc!=0){
        resolve("this email is used")
        }
            bcrypt.hash(password,10).then((hashedPassword)=>{

                         db.User.create({
                        username,email,password:hashedPassword
                    }).then((response)=>resolve(response))
                     .catch((err)=>reject(err))
                
            })
        
    })
    })
}
const PrivateKey="this is private ky hhhhhfdhfdkhkfhkfg "
exports.login=(email,password)=>{
    return new Promise((resolve,reject)=>{
        db.User.findOne({where:{email:email}}).then(user=>{
            if(!user){
              reject("invalid email")
            }

            
                bcrypt.compare(password,user.password).then(same=>{
                    if(same){
                        let token=jwt.sign({id:user.id,username:user.username,role:"userrole"},PrivateKey,{
                            expiresIn:"2h"
                        })
                      resolve({token:token})
                    }
                        reject("invalid password and email ")
                    
                })
            
        })
     
    })
}

exports.getUser=(req,res,next)=>{

    db.User.findOne({where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))


}
 
exports.getAllUsers=(req,res,next)=>{
    db.User.findAll()
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))

}

exports.update=(req,res,next)=>{
    db.User.update({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    },{where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
}

exports.delete=(req,res,next)=>{
    db.User.destroy({where:{id:req.params.id}})
    .then((response)=>res.status(200).send(response))
    .catch((err)=>res.status(400).send(err))
}



exports.uploadImage=(req,res,next)=>{
     // const {image}=req.body;
    //  console.log(req.file);
     db.Image.create({
         image: req.file.filename,
     }).then(()=>res.status(201).send("done !!"))
     .catch((err)=>res.status(500).send(err))
     
}

exports.sendEmail=(req,res,next)=>{

    // Step 1
let transporter =nodemailer.createTransport({
   
    service:'gmail',
    auth:{
         user:process.env.EMAIL,
        pass:process.env.PASSWORD
        
    }
});
     // step 2
     
let mailOptions = {
    from: 'slimen.ghnimi@etudiant-fst.utm.tn',
    to: `slimen.ghenimi@gmail.com`,
    subject:'Testing and testing pour final fois  ',
    cc:'slimen.ghenimi@gmail.com',
    text:'It ok  works'
}


//step 3
transporter.sendMail(mailOptions)
.then(function(response){
    console.log('email sent')
})
.catch(function(err){console.log('error in sent the email ')


});
}
