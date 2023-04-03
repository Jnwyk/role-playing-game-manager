const express = require("express");
const initPassport = require("./initialize-passport.js");
const routes = require("./routes/");
const PORT = 3000;

app = express();

app.use(express.json());
app.use(initPassport());

app.use("/api", routes);
app.get("*", (req, res) => res.status(404).json({ msg: "Page not found" }));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
