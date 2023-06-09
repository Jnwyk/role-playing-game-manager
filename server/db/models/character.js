const mongoose = require("mongoose");
const { Schema } = mongoose;

const characterSchema = new Schema(
  {
    name: { type: String, required: [true, "Character name is required"] },
    player: {
      type: mongoose.ObjectId,
      ref: "User",
      required: [true, "Owner of the character is required is required"],
    },
    description: { type: String, default: "No description provided" },
    statistics: { type: Object, default: "No statistics provided" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Character", characterSchema);
