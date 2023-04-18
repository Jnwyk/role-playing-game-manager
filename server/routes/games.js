const { Router } = require("express");
const Games = require("../db/models/game.js");
const Users = require("../db/models/user.js");

const create = async (req, res) => {
  try {
    const master = await Users.findOne({ username: req.body.master });
    const players = await Users.find({ username: req.body.player });
    const game = await Games.create({
      ...req.body,
      master: master._id,
      players: [...players._id],
    });
    res.status(201).json({ msg: "Game created", game: game });
  } catch (err) {
    res.status(500).json({ err: "Internal server error" || err });
  }
};

const getAll = async (req, res) => {
  try {
    let games = await Games.find({});
    games = await Promise.all(
      games.map((game) => game.populate("master", "username -_id"))
    );
    games = await Promise.all(
      games.map((game) => game.populate("players", "username -_id"))
    );
    res.status(200).json({ msg: "success", games: games });
  } catch (err) {
    res.status(500).json({ err: "Internal server error" || err });
  }
};

module.exports = Router().get("/", getAll).post("/", create);
