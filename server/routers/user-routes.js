const express = require("express");
const route = express.Router();

const db = require("../models");
const fileUpload = require("../middleware/file-aploader");

const userContoller = require("../controlles/userController");

route.post("/register", userContoller.register);

route.post("/login", userContoller.login);

route.get("/user/:id", userContoller.getUser);

route.get("/users", userContoller.getAllUsers);

route.put("/user/:id", userContoller.upload, userContoller.update);

route.delete("/user/:id", userContoller.delete);

route.post("/reset-password", userContoller.resetpassword);

route.post("/new-password", userContoller.newpassword);

route.post("/Add", fileUpload.single("image"), userContoller.uploadImage);

route.post("/sendEmail", userContoller.sendEmail);

route.put("/changepassword", userContoller.changePassword);

route.get("/countusers", userContoller.countUsers);

module.exports = route;
