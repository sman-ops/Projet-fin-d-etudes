const express= require('express')
const route=express.Router();




const {createSalon,listSalon, currentMonth,updateSalon,removeSalon } =require('../controlles/salonController')

 // create salon
route.post('/api/createSalon',createSalon)

// get all salon
route.get('/api/getSalon',listSalon)

//get all events par month

route.post('/api/current-monthSalon',currentMonth)


// update salon
route.put('/api/updateSalon',updateSalon)


//@endpoint  locahost:3001/api/delete
//Method     DELETE
//@Access    Public 
route.delete('/api/deleteSalon/:id',removeSalon)













module.exports=route;