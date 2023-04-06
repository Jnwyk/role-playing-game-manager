require("dotenv").config({ path: __dirname + "/config/.env" });
const express = require("express");
const cors = require("cors");
const initPassport = require("./initialize-passport.js");
const connectDb = require("./db/connection.js");
const routes = require("./routes/");

app = express();

app.use(express.json());
app.use(initPassport());
app.use(cors());

connectDb();

app.use("/api", routes);
app.get("*", (req, res) => res.status(404).json({ msg: "Page not found" }));

app.listen(process.env.PORT, () =>
  console.log(`Server is listening at ${process.env.HOST}:${process.env.PORT}`)
);
