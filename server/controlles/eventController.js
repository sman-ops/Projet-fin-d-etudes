const db = require('../models')
var sequelize= require('sequelize')

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD

    }
});


module.exports.createEvent = async(req,res)=>{
    const {title,start,end,email,typeEvent,langueEvent,lieu,description,color,UserId} = req.body
            if(!title){
                throw new Error('no data!')
            }
        try{ 
             data = await db.Events.create({title,start,end,email,typeEvent,langueEvent,lieu,description,color,UserId})
             transporter.sendMail({
                to: data.email,
                from: 'slimen.ghnimi@etudiant-fst.utm.tn',
                subject: "create an event",
                cc: 'slimen.ghenimi@gmail.com',
                html: `<h1>Welcome to our Talan Platform meeting online</h1>
                        <h5>click in this <a href="http://localhost:3000">link</a> to signin in our platform </h5>`
            })
             res.json(data)
            
             
        }catch(err){
            console.log('server err')
            res.status(500).send('server err')
        }
    
    }

    module.exports.listEvents = async(req,res)=>{
    
        try{ 
             
       res.send( await db.Events.findAll({}))
            
        }catch(err){
            console.log('server err')
            res.status(500).send('server err')
        }
    
    }

    module.exports.updateEvent = async(req,res)=>{
    
        try{ 
             console.log(req.body)
    const result= await db.Events.update({
        start: req.body.start,
        end: req.body.end

    },{where:{id:req.body.id}})

    res.send(result)
            
        }catch(err){
            console.log('server err')
            res.status(500).send('server err')
        }
    
    }



    module.exports.removeEvent = (req,res)=>{
    
        try{ 
            res.send(db.Events.destroy({ where:{id:req.params.id}}))

             
        }catch(err){
            console.log('server err')
            res.status(500).send('server err')
        }
    
    }

    module.exports.currentMonth = async(req,res)=>{
   
   
        try{ 

       const m = parseInt(req.body.mm)
            const currentM = await db.Events.findAll({
                where:
                   [ sequelize.where(sequelize.fn('MONTH', sequelize.col('start')),m)]

            })
               
           
                console.log(currentM)
                res.send(currentM)    
        }catch(err){
            console.log('server err')
            res.status(500).send('server err')
        }
    
    }