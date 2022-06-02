const db = require("../models");
var sequelize = require("sequelize");
const handlebars = require("handlebars");
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
    const htmlsend = `<h3>Welcome,</h3>  <br>You are invited to <U>{{title}}</U> present  event. <br> <br><U><strong>Details Event : </strong></U>  <br>
    <ul>
    <li>Name of the event :  {{title}}</li>
    <li>Start in :  {{start}}</li>
    <li>End in :{{end}}</li>
    <li>Location : {{lieu}}</li>
    <li>typeEvent : {{typeEvent}}</li>
    <li>langueEvent : {{langueEvent}}</li>
    <li>Description : {{description}} </li>
    </ul>  <br><br> Cordialement, `;
    const template = handlebars.compile(htmlsend);
    const replacement = {
      title: data.title,
      start: data.start,
      end: data.end,
      lieu: data.lieu,
      typeEvent: data.typeEvent,
      langueEvent: data.langueEvent,
      description: data.description,
    };
    const html = template(replacement);

    transporter.sendMail({
      to: data.email,
      from: "slimen.ghnimi@etudiant-fst.utm.tn",
      subject: "Present Event ",
      cc: "slimen.ghenimi@gmail.com",
      html,
    });
    res.json(data);
  } catch (err) {
    console.log("server err");
    res.status(500).send("server err");
  }
};

module.exports.listEvents = async (req, res) => {
  try {
    res.send(await db.Events.findAll({ order: [["createdAt", "DESC"]] }));
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
    transporter.sendMail({
      to: result.email,
      from: "slimen.ghnimi@etudiant-fst.utm.tn",
      subject: " Conceled Present Event ",
      cc: "slimen.ghenimi@gmail.com",
      html: `<h1>Sorry,the Present  event  is conceled </h1> `,
    });
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
exports.countPresentEvent = async (req, res) => {
  const events = await db.Events.count();
  res.json({ events });
};
