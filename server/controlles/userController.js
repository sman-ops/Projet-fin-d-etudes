const Joi = require('joi')
const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const { Op } = require('sequelize')
// send email
require('dotenv').config();
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport')
const { sequelize } = require('../models')

// to send mail using nodemailer we need what we call transporter
// transporter connect you to host domain 




//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


// const transporter = nodemailer.createTransport(sendgridTransport({
//     auth:{

//         api_key:"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"
//     }
// }))


let transporter = nodemailer.createTransport({

    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD

    }
});


exports.register = (req, res, next) => {
    const { firstname,lastname, email, password } = req.body;
    if (!firstname ||!lastname|| !email || !password) {
        return res.status(422).json({ error: "please add all the fields" })
    }

    db.User.count({ where: { email: email } }).then((saveUser) => {
        if (saveUser) {
            return res.status(422).json({ error: "user already exists with that email" })
        }
        bcrypt.hash(password, 10).then((hashedPassword) => {

            db.User.create({
                firstname,lastname, email, password: hashedPassword
            }).then(user => {
                transporter.sendMail({
                    to: user.email,
                    from: 'slimen.ghnimi@etudiant-fst.utm.tn',
                    subject: "Congrats! you signed with success",
                    cc: 'slimen.ghenimi@gmail.com',
                    html: `<h1>Welcome to our Talan Platform meeting online</h1>
                            <h5>click in this <a href="http://localhost:3000">link</a> to signin in our platform </h5>`
                })
                res.json({ message: "saved successfully" })
            })
                .catch(err => console.log(err))

        })

    }).catch(err => {
        console.log(err)
    })


}

const PrivateKey = "this is private ky hhhhhfdhfdkhkfhkfg "
exports.login = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).json({ error: "please add all the fields" })
    }

    db.User.findOne({ where: { email: email } }).then(savedUser => {
        if (!savedUser) {
            return res.status(422).json({ error: "Invalid Email or password" })
        }

        bcrypt.compare(password, savedUser.password).then(doMatch => {
            if (doMatch) {
                const token = jwt.sign({ id: savedUser.id, firstname: savedUser.firstname, role: "userrole" }, PrivateKey, {
                    expiresIn: "2h"
                })
                const { id, firstname,lastname, email } = savedUser
                res.json({ token, user: { id, firstname,lastname, email } })
            } else {
                return res.status(422).json({ error: "Invalid Email or password" })
            }
        })


    }).catch(err => {
        console.log(err)
    })
}



exports.getUser = (req, res, next) => {

    db.User.findOne({ where: { id: req.params.id } })
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))


}

exports.getAllUsers = (req, res, next) => {
    db.User.findAll()
        .then((response) => res.status(200).send(response))
        .catch((err) => res.status(400).send(err))

}

exports.update = (req, res, next) => {
    db.User.update({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        telephone: req.body.telephone,
        grade: req.body.grade,
        password: req.body.password,
        picture : req.body.pic

    }, { where: { id: req.params.id } })
        .then((response) => res.status(200).json({ message: "Updated successfly" }))
        .catch((err) => res.status(400).json({ error: "updated with echec" }))
}


exports.delete = (req, res, next) => {
    db.User.destroy({ where: { id: req.params.id } })
        .then((response) => res.json({ message: "successfly deleted" }))
        .catch((err) => res.status(400).send(err))
}


exports.resetpassword = async (req, res, next) => {
    crypto.randomBytes(32, (err, buffer) => {
        if (err) {
            console.log(err)
        }
        const token = buffer.toString("hex")
        db.User.findOne({ where: { email: req.body.email } })
            .then(user => {
                if (!user) {
                    return res.status(422).json({ error: "User dont exists with that email" })
                }
                user.resetToken = token
                user.expireToken = Date.now() + 7000000
                user.save()
                    .then((result) => {
                        transporter.sendMail({
                            to: user.email,
                            from: 'slimen.ghnimi@etudiant-fst.utm.tn',
                            subject: "password reset please click to link below",
                            html: `
                    <p>You requested for password reset</p>
                    <h5>click in this <a href="http://localhost:3000/resetpass/${token}">link</a> to reset password</h5>
                    `
                        })
                        res.json({ message: "check your email" })
                    })

            })

    })

}

exports.newpassword = (req, res) => {
    const newPassword = req.body.password
    const sentToken = req.body.token
    db.User.findOne({ where: { resetToken: sentToken, expireToken: { [Op.gt]: Date.now() } } })
        .then(user => {
            if (!user) {
                return res.status(422).json({ error: "Try again session expired" })
            }
            bcrypt.hash(newPassword, 12).then(hashedpassword => {

                user.password = hashedpassword
                user.resetToken = undefined
                user.expireToken = undefined
                user.save().then((saveduser) => {
                    res.json({ message: "password updated success" })
                })
            })
        }).catch(err => {
            console.log(err)
        })
}




exports.uploadImage = (req, res, next) => {
    // const {image}=req.body;
    //  console.log(req.file);
    db.Image.create({
        image: req.file.filename,
    }).then(() => res.status(201).send("done !!"))
        .catch((err) => res.status(500).send(err))

}


exports.sendEmail = (req, res, next) => {

    // Step 1
    let transporter = nodemailer.createTransport({

        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD

        }
    });
    // step 2

    let mailOptions = {
        from: 'slimen.ghnimi@etudiant-fst.utm.tn',
        to: `slimen.ghenimi@gmail.com`,
        subject: 'Testing and testing pour final fois  ',
        cc: 'slimen.ghenimi@gmail.com',
        text: 'It ok  works'
    }


    //step 3
    transporter.sendMail(mailOptions)
        .then(function (response) {
            console.log('email sent')
        })
        .catch(function (err) {
            console.log('error in sent the email ')


        });
}


