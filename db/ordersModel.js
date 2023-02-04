const mongoose = require("mongoose");

const schema = mongoose.Schema({
  itemList: Array,
  userId: String,
  userName: String,
  orderDate: Date,
});

module.exports = mongoose.model("orders", schema);
