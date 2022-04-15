module.exports=(sequelize,Datatype)=>{
    const Evenement=sequelize.define("Evenement",{

    
        titreEvent:{
            type:Datatype.STRING,
            allowNull:false
        },
        nomEvent:{
            type:Datatype.STRING,
            allowNull:false
        },
        
        descriptionEvent:{
            type:Datatype.STRING,
            allowNull:false
        },

        typeEvent:{
            type:Datatype.STRING,
            allowNull:false
        },
        debutEvent:{
            type:Datatype.DATE,
            allowNull:false
        },
        finEvent:{
            type:Datatype.DATE,
            allowNull:false
        },
            
        dateDebutEvent:{
            type:Datatype.DATE,
            allowNull:false
        },
        dateFinEvent:{
            type:Datatype.DATE,
            allowNull:false
        },
        LieuEvent:{
            type:Datatype.STRING,
            allowNull:false
        },
            
        formatEvent:{
            type:Datatype.STRING,
            allowNull:false
        },
        langueEvent:{
            type:Datatype.STRING,
            allowNull:false
        },
     
    })

    Evenement.associate=models=>{
        Evenement.belongsTo(models.User,{
            onDelete:"cascade"
        })
    }



    return Evenement
}