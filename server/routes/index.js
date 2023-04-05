const { Router } = require("express");
const googleAuth = require("./google-auth.js");
const test = require("./test.js");
const games = require("./games.js");

module.exports = Router()
  .get("/test", test)
  .use("/auth", googleAuth)
  .use("/games", games);
