const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"] }));

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "Hello World",
  });
});

module.exports = app;
