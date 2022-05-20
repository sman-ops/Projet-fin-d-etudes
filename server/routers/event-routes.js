const express = require("express");
const route = express.Router();

const {
  createEvent,
  listEvents,
  currentMonth,
  updateEvent,
  removeEvent,
  getEvent,
} = require("../controlles/eventController");

// create an event
route.post("/api/events", createEvent);

// get all events
route.get("/api/events", listEvents);
// get event by id
route.get("/api/event/:id", getEvent);

//get all events par month

route.post("/api/current-month", currentMonth);

// update an event
route.put("/api/update", updateEvent);

//@endpoint  locahost:3001/api/delete
//Method     DELETE
//@Access    Public
route.delete("/api/delete/:id", removeEvent);

module.exports = route;
