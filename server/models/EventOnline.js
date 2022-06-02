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
    mdp: {
      type: Datatype.STRING,
    },
    description: {
      type: Datatype.STRING,
    },

    color: {
      type: Datatype.STRING,
    },
  });

  EventOnline.associate = (models) => {
    EventOnline.belongsTo(models.User, {
      onDelete: "cascade",
    });
  };
  EventOnline.associate = (models) => {
    EventOnline.hasMany(models.Room, {
      onDelete: "cascade",
    });
  };

  return EventOnline;
};
