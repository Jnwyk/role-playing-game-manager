const { Router } = require("express");

module.exports = Router().get("/logged", async (req, res, next) => {
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
});
