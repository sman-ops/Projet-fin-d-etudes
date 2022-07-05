module.exports = (sequelize, Datatype) => {
  const EventOnline = sequelize.define("EventOnline", {
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
    mdp: {
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

  // EventOnline.associate = (models) => {
  //   EventOnline.belongsTo(models.User, {
  //     onDelete: "cascade",
  //   });
  // };
  EventOnline.associate = (models) => {
    EventOnline.hasMany(models.Room, {
      onDelete: "cascade",
    });
  };

  EventOnline.associate = (models) => {
    EventOnline.belongsToMany(models.User, {
      through: models.PresenceOnline,
      foreignKey: {
        name: "EventOnlineId",
        as: "users",
      },
    });
  };
  return EventOnline;
};
