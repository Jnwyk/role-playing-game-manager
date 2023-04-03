const { Router } = require("express");
const googleAuth = require("./google-auth.js");
const test = require("./test.js");

module.exports = Router().get("/test", test).use("/auth", googleAuth);
