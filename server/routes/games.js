const { Router } = require("express");
const Games = require("../db/models/game.js");

module.exports = Router().get("/", async (req, res) => {
  const games = await Games.find({});
  return res.status(200).json({ msg: "success", games: games });
});
