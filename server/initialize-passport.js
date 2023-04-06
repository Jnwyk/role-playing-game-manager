const passport = require("passport");
const session = require("express-session");
const JsonStore = require("express-session-json")(session);
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const User = require("./db/models/user.js");
const data = require("./dummyUsers.json");

const initialize = () => {
  passport.use(
    new LocalStrategy((username, password, done) => {
      const user = data.users.find((user) => {
        return user.username === username && user.password === password;
      });
      user === undefined ? done(null, false, user) : done(null, user);
    })
  );
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.googleClientSecret,
        callbackURL: "http://localhost:3000/api/auth/login/google/redirect",
        scope: ["https://www.googleapis.com/auth/userinfo.email"],
      },
      async (token, secretToken, profile, done) => {
        try {
          let user = await User.findOne({ email: profile.emails[0].value });
          if (user) {
            return done(null, user);
          }
          user = new User({
            username: profile.emails[0].value.split("@")[0],
            email: profile.emails[0].value,
          });
          await user.save();
          return done(null, user);
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
