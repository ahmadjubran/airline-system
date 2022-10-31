"use strict";

const events = require("./events.js");

require("./manager.js");
require("./system.js");

events.on("new-flight", (payload) => {
  console.log(`Pilot: new flight with ID '${payload.flightID}' have been scheduled`);

  setTimeout(() => {
    console.log(`Pilot: flight with ID '${payload.flightID}' took off`);
    events.emit("flight-took-off", payload);
  }, 4000);

  setTimeout(() => {
    console.log(`Pilot: flight with ID '${payload.flightID}' arrived`);
    events.emit("flight-arrived", payload);
  }, 7000);
});
