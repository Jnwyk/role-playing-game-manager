const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameSchema = new Schema(
  {
    name: { type: String, required: [true, "Title of the game is required"] },
    genre: { type: String, default: "No genre" },
    picture: {
      type: String,
      default:
        "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",
    },
    description: { type: String, default: "No description provided" },
    mechanics_description: { type: String, default: "No description provided" },
    sessions_played: {
      type: Number,
      default: 0,
    },
    dice_type: {
      type: Number,
    },
    master: {
      type: mongoose.ObjectId,
      ref: "User",
      required: [true, "Game master is required"],
    },
    players: [
      {
        type: mongoose.ObjectId,
        ref: "User",
        min: [2, "There must be at least 2 players"],
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Game", gameSchema);
