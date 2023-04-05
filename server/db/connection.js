const mongoose = require("mongoose");

module.exports = function connectDatabase() {
  mongoose.connect("mongodb://127.0.0.1:27017/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", () => console.log("Could not connect to database"));
  db.once("open", () => console.log("Connected to database successfully"));
};
