const express = require("express");
const route = express.Router();

const roomController = require("../controlles/roomController");

route.get("/allRoom", roomController.listRoom);

route.get("/roomById/:id", roomController.RoomById);

module.exports = route;
