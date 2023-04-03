const { Router } = require("express");

module.exports = function (req, res) {
  return res.status(200).json({ msg: "Test has been successful" });
};
