// const db = require("../models");
// var sequelize = require("sequelize");

// module.exports.PresenceUser = (req, res) => {
//   const { etat, EventOnlineId, EventId, UserId } = req.body;

//   db.Presence.create({
//     etat,
//     EventOnlineId,
//     EventId,
//     UserId,
//   })
//     .then((result) => {
//       res.json({ result });
//     })
//     .catch((err) => console.log(err));
// };

// module.exports.listPresence = (req, res) => {
//   db.Presence.findAll()
//     .then((result) => res.json({ result }))
//     .catch((err) => console.log(err));
// };

// module.exports.PresenceById = async (req, res) => {
//   db.Presence.findOne({ where: { id: req.params.id } })
//     .then((result) => res.json({ result }))
//     .catch((err) => console.log(err));
// };
