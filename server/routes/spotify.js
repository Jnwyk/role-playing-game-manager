const { Router } = require("express");
const querystring = require("querystring");

const login = (req, res) => {
  const clientId = "58bb2cc230f84df699fcd6874f054666";
  const redirectUri = "http://localhost:3000/games";
  const scope =
    "streaming user-read-email user-read-private user-library-read user-library-modify user-read-playback-state user-modify-playback-state user-read-currently-playing";
  const url =
    "https://accounts.spotify.com/authorize?" +
    querystring.stringify({
      response_type: "code",
      client_id: clientId,
      scope: scope,
      redirect_uri: redirectUri,
    });
  console.log(url);
  return res.redirect(302, url);
};

module.exports = Router().get("/login", login);
