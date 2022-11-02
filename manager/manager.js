"use strict";

const socket = require("../events.js");
const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");

setInterval(() => {
  let payload = {
    airLine: faker.company.name(),
    flightID: uuidv4(),
    pilot: faker.name.fullName(),
    destination: `${faker.address.country()}, ${faker.address.city()}`,
  };

  socket.emit("newFlight", payload);
}, 10000);

socket.on("newFlight", (payload) => {
  console.log(`Manager: new flight with ID '${payload.flightID}' have been scheduled`);
});

socket.on("flightArrived", (payload) => {
  console.log(`Manager: we’re greatly thankful for the amazing flight ${payload.pilot}`);
});
