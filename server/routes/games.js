const { Router } = require("express");
const Games = require("../db/models/game.js");

module.exports = Router()
  .get("/", async (req, res) => {
    try {
      const games = await Games.find({});
      res.status(200).json({ msg: "success", games: games });
    } catch (err) {
      res.status(500).json({ err: "Internal server error" || err });
    }
  })
  .post("/", async (req, res) => {
    try {
      const game = await Games.create({ ...req.body });
      res.status(201).json({ msg: "Game created", game: game });
    } catch (err) {
      res.status(500).json({ err: "Internal server error" || err });
    }
  });
