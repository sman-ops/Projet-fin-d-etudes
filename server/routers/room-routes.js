const express = require("express");
const route = express.Router();
const fileUploader = require("../middleware/pdfUploader");
const roomController = require("../controlles/roomController");

route.get("/allRoom", roomController.listRoom);

route.get("/roomById/:id", roomController.RoomById);

route.get("/allData/:id", roomController.listData);

route.get("/data", roomController.listDatabyId);

route.post("/savedata", fileUploader.single("msg"), roomController.Ajoutpdf);
module.exports = route;
