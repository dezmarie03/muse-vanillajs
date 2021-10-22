const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./src"));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});

app.listen(process.env.PORT || 3060, () =>
  console.log("Server running")
);
