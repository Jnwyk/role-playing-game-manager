const express = require("express");
const PORT = 3000;

app = express();

app.use(express.json());

app.get("/", (req, res) => res.status(200).json({ msg: "Success" }));

app.get("*", (req, res) => res.status(404).json({ msg: "Page not found" }));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
