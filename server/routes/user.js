const { Router } = require("express");
const bcrypt = require("bcrypt");
const User = require("../db/models/user");
const mongoose = require("mongoose");

module.exports = Router()
  .get("/", async (req, res, next) => {
    try {
      if (req.session.passport === undefined) {
        return res
          .status(200)
          .json({ authenticated: false, user: req.session.passport });
      }
      return res
        .status(200)
        .json({ authenticated: true, user: req.session.passport });
    } catch (err) {
      next(err);
    }
  })
  .put("/", async (req, res, next) => {
    try {
      const newPassword = await bcrypt.hash(req.body.password, 10);
      await User.findOneAndUpdate(
        { _id: req.session.passport.user._id },
        {
          $set: {
            ...req.body,
            password: newPassword,
          },
        }
      );
      const user = await User.findById(req.session.passport.user._id);
      req.session.passport.user = user;
      return res.status(200).json({ success: true, user: user });
    } catch (err) {
      if (err instanceof mongoose.Error.ValidationError) {
        err.status = 403;
        next(err);
      }
      next(err);
    }
  });
