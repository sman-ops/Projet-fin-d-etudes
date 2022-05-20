const db = require("../models");
var sequelize = require("sequelize");

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

module.exports.createEvent = async (req, res) => {
  const {
    title,
    start,
    end,
    email,
    typeEvent,
    langueEvent,
    lieu,
    description,
    color,
    UserId,
  } = req.body;
  if (!title) {
    throw new Error("no data!");
  }
  try {
    data = await db.Events.create({
      title,
      start,
      end,
      email,
      typeEvent,
      langueEvent,
      lieu,
      description,
      color,
      UserId,
    });
    transporter.sendMail({
      to: data.email,
      from: "slimen.ghnimi@etudiant-fst.utm.tn",
      subject: "Event Presentiel ",
      cc: "slimen.ghenimi@gmail.com",
      html: `<h1>Welcome ,You have a present event </h1>
                       `,
    });
    res.json(data);
  } catch (err) {
    console.log("server err");
    res.status(500).send("server err");
  }
};

module.exports.listEvents = async (req, res) => {
  try {
    res.send(await db.Events.findAll({}));
  } catch (err) {
    console.log("server err");
    res.status(500).send("server err");
  }
};
module.exports.getEvent = (req, res, next) => {
  db.Events.findOne({ where: { id: req.params.id } })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
};

module.exports.updateEvent = async (req, res) => {
  try {
    console.log(req.body);
    const result = await db.Events.update(
      {
        start: req.body.start,
        end: req.body.end,
        title: req.body.title,
        lieu: req.body.lieu,
        description: req.body.description,
      },
      { where: { id: req.body.id } }
    );

    res.send(result);
  } catch (err) {
    console.log("server err");
    res.status(500).send("server err");
  }
};

module.exports.removeEvent = (req, res) => {
  try {
    const result = db.Events.destroy({ where: { id: req.params.id } });
    res.json({ result, message: "Event deleted with success" });
  } catch (err) {
    console.log("server err");
    res.status(500).send("server err");
  }
};

module.exports.currentMonth = async (req, res) => {
  try {
    const m = parseInt(req.body.mm);
    const currentM = await db.Events.findAll({
      where: [
        sequelize.where(sequelize.fn("MONTH", sequelize.col("start")), m),
      ],
    });

    console.log(currentM);
    res.send(currentM);
  } catch (err) {
    console.log("server err");
    res.status(500).send("server err");
  }
};
