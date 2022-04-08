module.exports=(sequelize,Datatype)=>{
    const User=sequelize.define("User",{
        username:{
            type:Datatype.STRING,
            allowNull:false
        },
        email:{
            type:Datatype.STRING,
            allowNull:false
        },
        password:{
            type:Datatype.STRING,
            allowNull:true
        },
        resetToken:{
            type:Datatype.STRING,
            allowNull:true
        
        },
        expireToken:{
            type:Datatype.DATE,
            allowNull:true
          
        }
       
        

      



    })
    return User
}