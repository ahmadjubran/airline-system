"use strict";

require("dotenv").config();
const io = require("socket.io-client");
const socket = io.connect(`http://localhost:${process.env.PORT || 3001}`);

module.exports = socket;
