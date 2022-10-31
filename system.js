"use strict";

const events = require("./events.js");

require("./manager.js");
require("./pilot.js");

events.on("new-flight", (payload) => {
  console.log(`Flight { event: 'new-flight', time: ${new Date()}, Details: ${JSON.stringify(payload)} }`);
});

events.on("flight-took-off", (payload) => {
  console.log(`Flight { event: 'took-off', time: ${new Date()}, Details: ${JSON.stringify(payload)} }`);
});

events.on("flight-arrived", (payload) => {
  console.log(`Flight { event: 'arrived', time: ${new Date()}, Details: ${JSON.stringify(payload)} }`);
});
