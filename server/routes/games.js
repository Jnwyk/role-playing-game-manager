const { Router } = require("express");
const Games = require("../db/models/game.js");
const Users = require("../db/models/user.js");
const Characters = require("../db/models/character.js");
const Logs = require("../db/models/log.js");
const mongoose = require("mongoose");

const create = async (req, res, next) => {
  try {
    const master = await Users.findOne({ username: req.body.master });
    if (!master) throw new Error("specified master of game not found");
    let players = await Promise.all(
      req.body.players.map(async (player) => Users.find({ username: player }))
    );
    console.log(players);
    players = players.map((player) => player[0]._id);
    if (!players) throw new Error("specified players not found");
    console.log(players);
    const game = await Games.create({
      ...req.body,
      master: master._id,
      players: players,
    });
    res.status(201).json({ msg: "Game created", game: game });
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      err.status = 403;
      next(err);
    }
    if (
      err.message === "specified master of game not found" ||
      err.message === "specified players of game not found"
    )
      err.status = 404;
    next(err);
  }
};

const getAll = async (req, res, next) => {
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
    next(err);
  }
};

const getOne = async (req, res, next) => {
  try {
    let game = await Games.findById(req.params.id).populate(
      "players",
      "username"
    );
    if (!game) throw new Error("game not found");
    const characters = await Characters.find({ game: req.params.id }).populate(
      "player",
      "username"
    );
    const logs = await Logs.find({ game: req.params.id });
    res.status(200).json({
      msg: "success",
      game: game,
      characters: [...characters],
      logs: [...logs],
    });
  } catch (err) {
    if (err.message === "game not found") err.status = 404;
    next(err);
  }
};

module.exports = Router()
  .get("/", getAll)
  .post("/", create)
  .get("/:id", getOne);
