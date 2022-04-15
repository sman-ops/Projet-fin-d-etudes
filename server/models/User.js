module.exports=(sequelize,Datatype)=>{
    const User=sequelize.define("User",{
        firstname:{
            type:Datatype.STRING,
            allowNull:false
        },
        lastname:{
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
        picture:{
            type:Datatype.STRING,
            allowNull:true
        },
        telephone:{
            type:Datatype.INTEGER,
            allowNull:true
        },
        dateNaissance:{
            type:Datatype.DATE,
            allowNull:true
        },
        adresse:{
            type:Datatype.STRING,
            allowNull:true
        },
        role:{
            type:Datatype.STRING,
            allowNull:true
        },
        grade:{
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
        User.associate=models=>{
            User.hasMany(models.Evenement,{
                onDelete:"cascade"
            })
        }

    return User
}