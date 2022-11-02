"use strict";

const socket = require("../events.js");

socket.on("newFlight", (payload) => {
  console.log(`Pilot: new flight with ID '${payload.flightID}' have been scheduled`);

  setTimeout(() => {
    console.log(`Pilot: flight with ID '${payload.flightID}' took off`);
    socket.emit("flightTookOff", payload);
  }, 4000);

  setTimeout(() => {
    console.log(`Pilot: flight with ID '${payload.flightID}' has arrived`);
    socket.emit("flightArrived", payload);
  }, 7000);
});
