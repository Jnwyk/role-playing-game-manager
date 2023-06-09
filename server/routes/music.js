const { Router } = require("express");
const querystring = require("querystring");
const SpotifyWebApi = require("spotify-web-api-node");
const Users = require("../db/models/user.js");
const Songs = require("../db/models/song.js");
const mongoose = require("mongoose");

const login = (req, res) => {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
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
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
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
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
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

const create = async (req, res) => {
  try {
    const user = await Users.findOne({ username: req.body.user });
    const song = await Songs.create({
      ...req.body,
      user: user,
    });
    res.status(201).json({ msg: "Song added to favourites", song: song });
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError)
      return res.status(400).json({ err: err });
    return res.status(500).json({ err: "Inernal server error" || err });
  }
};

const getAll = async (req, res) => {
  try {
    let songs = await Songs.find({});
    res.status(200).json({ msg: "success", songs: songs });
  } catch (err) {
    return res.status(500).json({ err: "Inernal server error" || err });
  }
};

const remove = async (req, res) => {
  try {
    let song = await Songs.findOneAndDelete({ title: req.params.title });
    res.status(200).json({ msg: "Success", song: song });
  } catch (err) {
    return res.status(500).json({ err: "Inernal server error" || err });
  }
};

module.exports = Router()
  .get("/login", login)
  .post("/login/access", access)
  .post("/login/refresh", refresh)
  .post("/favourites", create)
  .get("/favourites", getAll)
  .delete("/favourites/:title", remove);
