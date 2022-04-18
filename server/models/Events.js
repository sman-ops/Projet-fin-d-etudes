module.exports=(sequelize,Datatype)=>{
    const Events=sequelize.define("Events",{

    
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

        lieu:{
            type:Datatype.STRING
        },

        color:{
            type:Datatype.STRING
        }

       


        })

        Events.associate=models=>{
            Events.belongsTo(models.User,{
                onDelete:"cascade"
            })
        }
        return Events
}