const { Router } = require("express");
const { model } = require("mongoose");
const ip = require("ip");

module.exports = Router().get("/", (req, res) => {
  const ipAddress = ip.address();
  res.send(ipAddress);
});
