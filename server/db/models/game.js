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
    master: mongoose.ObjectId,
    players: [mongoose.ObjectId],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Game", gameSchema);
