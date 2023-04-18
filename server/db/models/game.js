const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameSchema = new Schema(
  {
    name: String,
    genre: String,
    picture: String,
    description: String,
    sessions_played: {
      type: Number,
      default: 0,
    },
    master: { type: mongoose.ObjectId, ref: "User" },
    players: [{ type: mongoose.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Game", gameSchema);
