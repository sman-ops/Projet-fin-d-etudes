const express = require("express");
const route = express.Router();

const roomController = require("../controlles/roomController");

route.get("/allRoom", roomController.listRoom);

route.get("/roomById/:id", roomController.RoomById);

route.get("/allData/:id", roomController.listData);

route.get("/data", roomController.listDatabyId);

module.exports = route;
