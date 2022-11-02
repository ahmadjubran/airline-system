"use strict";

require("dotenv").config();
const io = require("socket.io")(process.env.PORT || 3001);

io.on("connection", (socket) => {
  console.log("Connected to socket.io server");

  const data = function (event, payload) {
    return console.log(
      `Flight {
        event: ${event},
        time: ${new Date().toLocaleString()},
        Details: {
          airLine: ${payload.airLine},
          flightID: ${payload.flightID},
          pilot: ${payload.pilot},
          destination: ${payload.destination}
        }
      }`
    );
  };

  socket.on("newFlight", (payload) => {
    data("new-flight", payload);
    io.emit("newFlight", payload);
  });

  socket.on("flightTookOff", (payload) => {
    data("took-off", payload);
    io.emit("flightTookOff", payload);
  });

  socket.on("flightArrived", (payload) => {
    data("arrived", payload);
    io.emit("flightArrived", payload);
  });
});
