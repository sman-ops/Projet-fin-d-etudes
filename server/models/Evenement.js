module.exports=(sequelize,Datatype)=>{
    const Evenement=sequelize.define("Evenement",{
        typeEvent:{
            type:Datatype.STRING,
            allowNull:false
        },
        NomEvent:{
            type:Datatype.STRING,
            allowNull:false
        },
        LieuEvent:{
            type:Datatype.STRING,
            allowNull:false
        }
    })


    return Evenement
}