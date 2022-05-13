module.exports=(sequelize,Datatype)=>{
    const Salon=sequelize.define("Salon",{

    
        title:{
            type:Datatype.STRING
        
        
        },
        start:{
            type:Datatype.STRING,
            allowNull:false
        
        },
        end:{
            type:Datatype.STRING,
            allowNull:false
            },
         email:{
            type:Datatype.STRING,
            allowNull:false
            },
         mdp:{
                type:Datatype.STRING
            },
        color:{
            type:Datatype.STRING
        }

     


        })

        Salon.associate=models=>{
            Salon.belongsTo(models.User,{
                onDelete:"cascade"
            })
        }
        Salon.associate=models=>{
            Salon.hasMany(models.Room,{
                onDelete:"cascade"
            })
        }
        
        return Salon
}