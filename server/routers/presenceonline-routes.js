const express = require("express");
const route = express.Router();

const presenceOnlineController = require("../controlles/presenceonlineController");

route.post("/presenceonlineUser", presenceOnlineController.PresenceOnlineUser);
// get all presence of users in an  avent
route.get("/AllPresenceOnline", presenceOnlineController.listPresenceOnline);
route.get(
  "/participantsonline/:eventonlineId",
  presenceOnlineController.ParticipantsByEventOnline
);

route.get("/PresenceById/:id", presenceOnlineController.PresenceOnlineById);

module.exports = route;
