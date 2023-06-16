require("dotenv").config({ path: __dirname + "/config/.env" });
const express = require("express");
const cors = require("cors");
const initPassport = require("./initialize-passport.js");
const connectDb = require("./db/connection.js");
const routes = require("./routes/");
const cookieParser = require("cookie-parser");

app = express();
connectDb();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(initPassport());

const errorInvalidPath = (req, res, next) => {
  let error = new Error("Whoopsy... Wrong path!");
  error.status = 404;
  next(error);
};

const errorLogger = (error, req, res, next) => {
  console.log(error);
  next(error);
};

const errorResponse = (error, req, res, next) => {
  const status = error.status || 500;
  res
    .status(error.status || 500)
    .json({ success: false, status: status, message: error.message });
};

app.use("/api", routes);
app.use(errorInvalidPath);
app.use(errorLogger);
app.use(errorResponse);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening at ${process.env.HOST}:${process.env.PORT}`)
);
