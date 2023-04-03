const passport = require("passport");
const session = require("express-session");
const JsonStore = require("express-session-json")(session);
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const data = require("../dummyUsers.json");

const initialize = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID:
          "343434439264-dtu1sdlfi586dfolvpgu4tm0eg5r9h16.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:3000/api/auth/login/google/redirect",
        scope: ["https://www.googleapis.com/auth/userinfo.email"],
      },
      (token, secretToken, profile, done) => {
        const user = data.users.find(
          (user) => user.email === profile.emails[0].value
        );
        user === undefined ? done(null, false, user) : done(null, user);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  const cookieSession = session({
    secret: "super-secret-session-key",
    name: "session",
    resave: false,
    saveUninitialized: true,
    store: new JsonStore(),
    cookie: {},
  });

  const authMiddleware = passport.initialize();
  passport.session();

  return [cookieSession, authMiddleware];
};

module.exports = initialize;
