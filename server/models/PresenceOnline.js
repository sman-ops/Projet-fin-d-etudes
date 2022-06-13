module.exports = (sequelize, Datatype) => {
  const PresenceOnline = sequelize.define("PresenceOnline", {
    UserId: {
      type: Datatype.INTEGER,
      allowNull: false,
    },
    EventOnlineId: {
      type: Datatype.INTEGER,
      allowNull: false,
    },
  });

  return PresenceOnline;
};
