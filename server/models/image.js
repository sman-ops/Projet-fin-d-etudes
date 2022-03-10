module.exports=(sequelize,Datatype)=>{
    const Image=sequelize.define("Image",{
        image:{
            type:Datatype.STRING,
            allowNull:false
        }
    })
    return Image
}