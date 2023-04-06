const { Router } = require("express");
const auth = require("./auth.js");
const test = require("./test.js");
const games = require("./games.js");

module.exports = Router()
  .get("/test", test)
  .use("/auth", auth)
  .use("/games", games);
