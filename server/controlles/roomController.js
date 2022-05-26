const db = require("../models");
var sequelize = require("sequelize");

module.exports.listRoom = (req, res) => {
  db.Room.findAll({ include: [db.EventOnline] })
    .then((result) => res.json({ result }))
    .catch((err) => console.log(err));
};

module.exports.RoomById = async (req, res) => {
  db.Room.findOne({
    where: { id: req.params.id },
    include: [db.EventOnline],
  })
    .then((result) => res.json({ result }))
    .catch((err) => console.log(err));
};
