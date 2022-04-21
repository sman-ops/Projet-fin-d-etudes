const express=require('express');
const app=express();
const cors=require('cors')
const db=require('./models')
const path = require("path");
const userRouters=require('./routers/user-routes')
const eventRouters=require('./routers/event-routes')
const salonRouters=require('./routers/salon-routes')


// permet bash  net3amlo mt3a data eli jayetna mn form
app.use(express.urlencoded({extended:true}));
// bash  najmo nt3malo m3a  data eli jayetna sous forme json
app.use(express.json());
app.use(cors());

app.use('/',userRouters);

app.use('/',eventRouters)

app.use('/',salonRouters)




app.use("/uploads/images",express.static(path.join("uploads", "images")));



db.sequelize.sync().then(()=>{
    app.listen(3001,()=>console.log("server running in port 3001"))
})



