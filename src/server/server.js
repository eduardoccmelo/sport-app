const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Player = require("./models/player");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("The server is on!");
});

app.get("/players", (req, res) => {
  Player.find()
    .then((allPlayers) => {
      console.log(allPlayers);
      res.status(200);
      res.json(allPlayers);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/players/:playerId", (req, res) => {
  Player.findById(req.params.playerId).then((player) => {
    if (player) {
      console.log(player);
      res.status(200);
      res.json(player);
    } else {
      console.log("Player Not Found");
      res.status(404);
      res.json("Player Not Found");
    }
  });
});

// mongoose.connect("mongodb://")

const mongodb = mongoose.connection;

mongodb.on("open", () => {
  app.listen(4000, () => {
    console.log("Server is On");
  });
});
