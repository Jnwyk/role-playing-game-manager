const { Router } = require("express");
const auth = require("./auth.js");
const game = require("./games.js");
const user = require("./user.js");
const spotify = require("./music.js");
const character = require("./character.js");
const log = require("./logs.js");
const light = require("./light.js");
const ipAddress = require("./ipAddress.js");

module.exports = Router()
  .use("/auth", auth)
  .use("/games", game)
  .use("/user", user)
  .use("/spotify", spotify)
  .use("/character", character)
  .use("/log", log)
  .use("/light", light)
  .use("/ip", ipAddress);
