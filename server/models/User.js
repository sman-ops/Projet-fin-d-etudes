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
            allowNull:false
        }
    })
    return User
}