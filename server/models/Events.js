module.exports = (sequelize, Datatype) => {
  const Events = sequelize.define("Events", {
    title: {
      type: Datatype.STRING,
    },
    start: {
      type: Datatype.STRING,
      allowNull: false,
    },

    end: {
      type: Datatype.STRING,
      allowNull: false,
    },
    email: {
      type: Datatype.STRING,
      allowNull: false,
    },

    typeEvent: {
      type: Datatype.STRING,
    },
    langueEvent: {
      type: Datatype.STRING,
    },
    lieu: {
      type: Datatype.STRING,
    },

    description: {
      type: Datatype.STRING,
    },

    color: {
      type: Datatype.STRING,
    },
    UserId: {
      type: Datatype.INTEGER,
    },
  });

  // Events.associate = (models) => {
  //   Events.belongsTo(models.User, {
  //     onDelete: "cascade",
  //   });
  // };

  Events.associate = (models) => {
    Events.belongsToMany(models.User, {
      through: models.Presence,
      foreignKey: {
        name: "EventId",
        as: "users",
      },
    });
  };

  return Events;
};
