const express= require('express')
const route=express.Router();


const {createEvent,listEvents, currentMonth } =require('../controlles/eventController')

 // create an event 
route.post('/api/events',createEvent)

// get all events
route.get('/api/events',listEvents)

//get all events par month

route.post('/api/current-month',currentMonth)


module.exports=route;