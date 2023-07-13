const { Router } = require("express");
const Character = require("../db/models/character.js");
const User = require("../db/models/user.js");
const mongoose = require("mongoose");

const create = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.player });
    const character = await Character.create({ ...req.body, player: user._id });
    res.status(201).json({ msg: "Success", character: character });
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) err.status = 403;
    next(err);
  }
};

const getAll = async (req, res, next) => {
  try {
    const characters = await Character.find({});
    res.status(200).json({ msg: "Success", characters: characters });
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const character = await Character.findOneAndUpdate(
      { _id: req.params.characterId },
      { ...req.body }
    );
    if (!character) {
      throw new Error("Position not found");
    }
    return res.status(200).json({ msg: "Success", character: character });
  } catch (err) {
    next(err);
  }
};

module.exports = Router()
  .post("/", create)
  .get("/", getAll)
  .put("/:characterId", edit);
