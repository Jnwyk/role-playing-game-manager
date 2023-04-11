const mongoose = require("mongoose");
const { Schema } = mongoose;

const lightSchema = new Schema(
  {
    name: String,
    red: { type: Number, min: 0, max: 255 },
    green: { type: Number, min: 0, max: 255 },
    blue: { type: Number, min: 0, max: 255 },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Light", lightSchema);
