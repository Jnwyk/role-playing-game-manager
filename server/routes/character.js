const { Router } = require("express");
const Character = require("../db/models/character.js");
const User = require("../db/models/user.js");

const create = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.player });
    const character = await Character.create({ ...req.body, player: user._id });
    res.status(201).json({ msg: "Success", character: character });
  } catch (err) {
    return res.status(500).json({ err: "Inernal server error" || err });
  }
};

const getAll = async (req, res) => {
  try {
    const characters = await Character.find({});
    res.status(200).json({ msg: "Success", characters: characters });
  } catch (err) {
    return res.status(500).json({ err: "Inernal server error" || err });
  }
};

module.exports = Router().post("/", create).get("/", getAll);
