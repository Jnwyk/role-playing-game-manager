const { Router } = require("express");
const passport = require("passport");

module.exports = Router()
  .get("/login/google", passport.authenticate("google"))
  .get(
    "/login/google/redirect",
    passport.authenticate("google", {
      successRedirect: "http://localhost:3001/#/register",
      failureRedirect: "http://localhost:3000/#/",
    })
  )
  .get("/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
    });
    return res.redirect("http://localhost:3000/#/");
  });
