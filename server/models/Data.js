module.exports = (sequelize, Datatype) => {
  const Data = sequelize.define("Data", {
    sender: {
      type: Datatype.STRING,
    },
    msg: {
      type: Datatype.STRING,
    },
    time: {
      type: Datatype.STRING,
    },
    room: {
      type: Datatype.STRING,
    },
    pdf: {
      type: Datatype.BOOLEAN,
    },
  });

  return Data;
};
