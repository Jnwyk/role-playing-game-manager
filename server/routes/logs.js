const Router = require("express");
const Logs = require("../db/models/log.js");
const mongoose = require("mongoose");

const getAll = async (req, res, next) => {
  try {
    const logs = await Logs.find().populate("game", "_id");
    return res.status(200).json({ msg: "Success", logs: logs });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const logs = await Logs.create({ ...req.body });
    return res.status(201).json({ msg: "Success", logs: logs });
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) err.status = 403;
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    if (!req.params.logId) {
      throw new Error("No params");
    }
    const log = await Logs.findOneAndUpdate(
      { _id: req.params.logId },
      { ...req.body }
    );
    if (!log) {
      throw new Error("Position not found");
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
