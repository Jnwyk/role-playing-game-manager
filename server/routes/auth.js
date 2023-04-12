const { Router } = require("express");
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../db/models/user.js");

module.exports = Router()
  .post("/signup/traditional", async (req, res) => {
    try {
      const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 10),
      });
      await user.save();
      return res.redirect(201, "http://localhost:3001/#/register");
    } catch (err) {
      return res.redirect("http://localhost:3001/#/");
    }
  })
  .post(
    "/login/traditional",
    passport.authenticate("local", {
      failureRedirect: "http://localhost:3001/#/",
    }),
    (req, res) => res.redirect("http://localhost:3001/#/games")
  )
  .get("/login/google", passport.authenticate("google"))
  .get(
    "/login/google/redirect",
    passport.authenticate("google", {
      successRedirect: "http://localhost:3001/#/games",
      failureRedirect: "http://localhost:3001/#/",
    })
  )
  .get("/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
    });
    return res.redirect("http://localhost:3001/#/");
  });
