const mongoose = require("mongoose");
const { Schema } = mongoose;

const gameSchema = new Schema({
  name: String,
  master: mongoose.ObjectId,
  players: [mongoose.ObjectId],
});

module.exports = mongoose.model("Game", gameSchema);
