const db = require("../models");
var sequelize = require("sequelize");

// const nodemailer = require('nodemailer');

// let transporter = nodemailer.createTransport({

//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD

//     }
// });

module.exports.createSalon = async (req, res) => {
  const { title, start, end, email, mdp, color, UserId } = req.body;
  if (!title) {
    throw new Error("no data!");
  }
  try {
    data = await db.EventOnline.create({
      title,
      start,
      end,
      email,
      mdp,
      color,
      UserId,
    });
    // //  transporter.sendMail({
    // //     to: data.email,
    // //     from: 'slimen.ghnimi@etudiant-fst.utm.tn',
    // //     subject: "create an event",
    // //     cc: 'slimen.ghenimi@gmail.com',
    // //     html: `<h1>Welcome to our Talan Platform meeting online</h1>
    // //             <h5>click in this <a href="http://localhost:3000">link</a> to signin in our platform </h5>`
    // })
    res.json(data);
    db.Room.create({
      url: data.mdp,
      EventOnlineId: data.id,
    });
  } catch (err) {
    console.log("server err");
    res.status(500).send("server err");
  }
};

module.exports.listSalon = async (req, res) => {
  try {
    res.send(await db.EventOnline.findAll({}));
  } catch (err) {
    console.log("server err");
    res.status(500).send("server err");
  }
};

module.exports.updateSalon = async (req, res) => {
  try {
    console.log(req.body);
    const result = await db.EventOnline.update(
      {
        start: req.body.start,
        end: req.body.end,
      },
      { where: { id: req.body.id } }
    );

    res.send(result);
  } catch (err) {
    console.log("server err");
    res.status(500).send("server err");
  }
};

module.exports.removeSalon = (req, res) => {
  try {
    const result = db.EventOnline.destroy({ where: { id: req.params.id } });
    res.json({ result, message: "Event deleted with success" });
  } catch (err) {
    console.log("server err");
    res.status(500).send("server err");
  }
};

module.exports.currentMonth = async (req, res) => {
  try {
    const m = parseInt(req.body.mm);
    const currentM = await db.EventOnline.findAll({
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
