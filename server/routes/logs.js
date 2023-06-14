const Router = require("express");
const Logs = require("../db/models/log.js");
const Games = require("../db/models/game.js");

const getAll = async (req, res) => {
  try {
    const logs = Logs.find().populate("game", "_id");
    return res.status(200).json({ msg: "Success", logs: logs });
  } catch (err) {
    return res.status(500).json({ err: "Inernal server error" || err });
  }
};

const create = async (req, res) => {
  try {
    const logs = await Logs.create({ ...req.body });
    return res.status(201).json({ msg: "Success", logs: logs });
  } catch (err) {
    return res.status(500).json({ err: "Inernal server error" || err });
  }
};

const edit = async (req, res) => {
  try {
    const log = await Logs.findOneAndUpdate(
      { _id: req.params.logId },
      { ...req.body }
    );
    return res.status(200).json({ msg: "Success", log: log });
  } catch (err) {
    return res.status(500).json({ err: "Inernal server error" || err });
  }
};

module.exports = Router()
  .get("/", getAll)
  .post("/", create)
  .put("/:logId", edit);
