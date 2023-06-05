const { Router } = require("express");
const spotifyWebApi = require("spotify-web-api-node");
const querystring = require("querystring");
const SpotifyWebApi = require("spotify-web-api-node");

const login = (req, res) => {
  const clientId = "58bb2cc230f84df699fcd6874f054666";
  const redirectUri = "http://localhost:3000/music";
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
  return res.redirect(302, url);
};

const access = (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000/music",
    clientId: "58bb2cc230f84df699fcd6874f054666",
    clientSecret: "de3a0df57fa241f2aada7170975ff6a0",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) =>
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    )
    .catch((err) => res.status(400).json({ err: err }));
};

const refresh = (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000/music",
    clientId: "58bb2cc230f84df699fcd6874f054666",
    clientSecret: "de3a0df57fa241f2aada7170975ff6a0",
    refreshToken,
  });
  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => res.status(400));
};

module.exports = Router()
  .get("/login", login)
  .post("/login/access", access)
  .post("/login/refresh", refresh);
