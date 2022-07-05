const db = require("../models");
var sequelize = require("sequelize");

module.exports.listRoom = (req, res) => {
  db.Room.findAll({ order: [["createdAt", "DESC"]], include: [db.EventOnline] })
    .then((result) => res.json({ result }))
    .catch((err) => console.log(err));
};
// include: [db.EventOnline]

module.exports.RoomById = async (req, res) => {
  db.Room.findOne({
    where: { id: req.params.id },
  })
    .then((result) => res.json({ result }))
    .catch((err) => console.log(err));
};
//  include: [db.EventOnline],

module.exports.listData = (req, res) => {
  const { id } = req.params;
  db.Data.findAll({ where: { room: id } })
    .then((result) => res.json({ result }))
    .catch((err) => console.log(err));
};

module.exports.listDatabyId = (req, res) => {
  db.Data.findOne({ where: { room: req.body.url } })
    .then((result) => res.json({ result }))
    .catch((err) => console.log(err));
};

module.exports.Ajoutpdf = (req, res) => {
  const { sender, time, pdf, roomId } = req.body;
  let msg = "";
  if (req.file) {
    msg = req.file.filename;
  } else {
    msg = req.body.msg;
  }
  db.Data.create({
    sender: sender,
    msg: msg,
    room: roomId,
    time: time,
    pdf: pdf,
  })
    .then((result) => {
      res.json({ result });
    })
    .catch((err) => console.log(err));
};
