const db = require("../models");
var sequelize = require("sequelize");

module.exports.PresenceOnlineUser = (req, res) => {
  const { EventOnlineId, UserId } = req.body;

  db.PresenceOnline.create({
    EventOnlineId,
    UserId,
  })
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => console.log(err));
};

module.exports.listPresenceOnline = (req, res) => {
  db.PresenceOnline.findAll({})
    .then((result) => res.json({ result }))
    .catch((err) => console.log(err));
};

module.exports.ParticipantsByEventOnline = (req, res) => {
  db.sequelize
    .query(
      `SELECT * FROM presenceonlines LEFT JOIN users ON users.id = presenceonlines.UserId WHERE EventOnlineId = ${req.params.eventonlineId};`
    )
    .then((result) => res.json({ result: result[0] }))
    .catch((err) => console.log(err));
};

module.exports.PresenceOnlineById = async (req, res) => {
  db.PresenceOnline.findOne({
    where: { EventOnlineId: req.params.id },
    include: [db.User],
  })
    .then((result) => res.json({ result }))
    .catch((err) => console.log(err));
};
