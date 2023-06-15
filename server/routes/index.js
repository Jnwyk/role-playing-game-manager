const { Router } = require("express");
const auth = require("./auth.js");
const test = require("./test.js");
const game = require("./games.js");
const user = require("./user.js");
const spotify = require("./music.js");
const character = require("./character.js");
const log = require("./logs.js");

module.exports = Router()
  .get("/test", test)
  .use("/auth", auth)
  .use("/games", game)
  .use("/user", user)
  .use("/spotify", spotify)
  .use("/character", character)
  .use("/log", log);
