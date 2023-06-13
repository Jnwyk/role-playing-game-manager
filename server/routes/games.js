const { Router } = require("express");
const Games = require("../db/models/game.js");
const Users = require("../db/models/user.js");
const Characters = require("../db/models/character.js");
const mongoose = require("mongoose");

const create = async (req, res) => {
  try {
    const master = await Users.findOne({ username: req.body.master });
    const players = await Users.find({ username: req.body.player });
    const game = await Games.create({
      ...req.body,
      master: master._id,
      players: [...players],
    });
    res.status(201).json({ msg: "Game created", game: game });
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError)
      return res.status(400).json({ err: err });
    return res.status(500).json({ err: "Inernal server error" || err });
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

const getOne = async (req, res) => {
  try {
    let game = await Games.findById(req.params.id).populate(
      "players",
      "username"
    );
    const characters = await Characters.find({ game: req.params.id }).populate(
      "player",
      "username"
    );
    res
      .status(200)
      .json({ msg: "success", game: game, characters: [...characters] });
  } catch (err) {
    res.status(500).json({ err: "Internal server error" || err });
  }
};

module.exports = Router()
  .get("/", getAll)
  .post("/", create)
  .get("/:id", getOne);
