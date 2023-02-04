const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  category: String,
  name: String,
  img: String,
  price: Number,
  note:String,
});

module.exports = mongoose.model("items", schema);
