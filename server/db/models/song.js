const mongoose = require("mongoose");
const { Schema } = mongoose;

const songSchema = new Schema(
  {
    user: {
      type: mongoose.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    title: { type: String, required: [true, "Song title required"] },
    artist: { type: String, required: [true, "Song artist required"] },
    trackUri: { type: String, required: [true, "Song uri required"] },
    albumUrl: { type: String, required: [true, "Album picture required"] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Song", songSchema);
