const db = require('../models')
var sequelize= require('sequelize')

module.exports.createEvent = async(req,res)=>{
    const {title,start,end,lieu,color,UserId} = req.body
            if(!title){
                throw new Error('no data!')
            }
        try{ 
             data = await db.Events.create({title,start,end,lieu,color,UserId})
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