module.exports = (sequelize, Datatype) => {
  const Room = sequelize.define("Room", {
    url: {
      type: Datatype.STRING,
    },
  });

  Room.associate = (models) => {
    Room.belongsTo(models.EventOnline, {
      onDelete: "cascade",
    });
  };

  return Room;
};
