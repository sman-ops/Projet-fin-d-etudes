const db = require("../models");
var sequelize = require("sequelize");

module.exports.PresenceUser = (req, res) => {
  const { EventId, UserId } = req.body;

  db.Presence.create({
    EventId,
    UserId,
  })
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => console.log(err));
};

module.exports.listPresence = (req, res) => {
  db.Presence.findAll({
    where: { EventId: req.body.EventId },
  })
    .then((result) => res.json({ result }))
    .catch((err) => console.log(err));
};

module.exports.PresenceById = async (req, res) => {
  db.Presence.findOne({
    where: { EventId: req.params.id },
    include: [db.User],
  })
    .then((result) => res.json({ result }))
    .catch((err) => console.log(err));
};
