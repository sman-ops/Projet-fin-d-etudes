const express= require('express')
const route=express.Router();


const {createEvent,listEvents, currentMonth,updateEvent } =require('../controlles/eventController')

 // create an event 
route.post('/api/events',createEvent)

// get all events
route.get('/api/events',listEvents)

//get all events par month

route.post('/api/current-month',currentMonth)

route.put('/api/update',updateEvent)


module.exports=route;