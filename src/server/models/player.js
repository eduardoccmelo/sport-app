const mongoose = require("mongoose");

const { Schema } = mongoose;

const PlayerSchema = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Player", PlayerSchema);
