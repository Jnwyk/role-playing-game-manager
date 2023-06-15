const mongoose = require("mongoose");
const { Schema } = mongoose;

const logSchema = new Schema(
  {
    game: {
      type: mongoose.ObjectId,
      ref: "Game",
      required: [true, "Game must be assigned to a log"],
    },
    text: { type: String, default: "No text in this log" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Log", logSchema);
