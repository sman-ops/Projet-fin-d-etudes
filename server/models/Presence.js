module.exports = (sequelize, Datatype) => {
  const Presence = sequelize.define("Presence", {
    UserId: {
      type: Datatype.INTEGER,
      allowNull: false,
    },
    EventId: {
      type: Datatype.INTEGER,
      allowNull: false,
    },
  });

  return Presence;
};
