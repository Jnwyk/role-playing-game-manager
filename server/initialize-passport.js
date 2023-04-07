const passport = require("passport");
const session = require("express-session");
const JsonStore = require("express-session-json")(session);
const bcrypt = require("bcrypt");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const User = require("./db/models/user.js");
const data = require("./dummyUsers.json");

const initialize = () => {
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        let user = await User.findOne({ username: username });
        if (user) {
          const match = await bcrypt.compareSync(password, user.password);
          if (match) {
            return done(null, user);
          }
          return done(null, false);
        }
        return done(null, false);
      } catch (err) {
        return done(err, false);
      }
    })
  );
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/api/auth/login/google/redirect",
        scope: ["https://www.googleapis.com/auth/userinfo.email"],
      },
      async (token, secretToken, profile, done) => {
        try {
          let user = await User.findOne({ email: profile.emails[0].value });
          if (user) {
            return done(null, user);
          } else {
            user = new User({
              username: profile.emails[0].value.split("@")[0],
              email: profile.emails[0].value,
            });
            await user.save();
            return done(null, user);
          }
        } catch (err) {
          return done(err, false);
        }
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
