const Router = require("express");
const Logs = require("../db/models/log.js");
const Games = require("../db/models/game.js");

const getAll = async (req, res) => {
  try {
    const logs = await Logs.find().populate("game", "_id");
    console.log(logs);
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

const edit = async (req, res, next) => {
  try {
    if (!req.params.logId) throw new Error("No params");
    const log = await Logs.findOneAndUpdate(
      { _id: req.params.logId },
      { ...req.body }
    );
    if (!log) {
      throw new Error("Not found");
    }
    return res.status(200).json({ msg: "Success", log: log });
  } catch (error) {
    next(error);
  }
};

module.exports = Router()
  .get("/", getAll)
  .post("/", create)
  .put("/:logId", edit);
