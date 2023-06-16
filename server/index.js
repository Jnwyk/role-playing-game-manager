require("dotenv").config({ path: __dirname + "/config/.env" });
const express = require("express");
const cors = require("cors");
const initPassport = require("./initialize-passport.js");
const connectDb = require("./db/connection.js");
const routes = require("./routes/");
const errorLogger = require("./helpers/errors/errorLogger.js");
const errorResponse = require("./helpers/errors/errorResponse.js");
const errorInvalidPath = require("./helpers/errors/errorInvalidPath.js");
const cookieParser = require("cookie-parser");

app = express();
connectDb();
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(initPassport());

app.use("/api", routes);
app.use(errorInvalidPath);
app.use(errorLogger);
app.use(errorResponse);

app.listen(process.env.PORT, () =>
  console.log(`Server is listening at ${process.env.HOST}:${process.env.PORT}`)
);
