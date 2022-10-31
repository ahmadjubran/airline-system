"use strict";

const events = require("./events.js");
const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");

require("./pilot.js");
require("./system.js");

setInterval(() => {
  let country = faker.address.country();
  let city = faker.address.city();

  const payload = {
    airLine: "Royal Jordanian Airlines",
    flightID: uuidv4(),
    pilot: faker.name.fullName(),
    destination: `${country}, ${city}`,
  };

  console.log(`Manager: new flight with ID '${payload.flightID}' have been scheduled`);
  events.emit("new-flight", payload);
}, 10000);

events.on("flight-arrived", (payload) => {
  console.log(`Manager: ${payload.pilot} has arrived at ${payload.destination}`);
});
