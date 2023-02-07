const mongoose = require("mongoose");

const schema = mongoose.Schema({
  itemList: Array,
  userId: String,
  userName: String,
  orderDate: Date,
  subTotal:Number,
  total:Number,
  tax:String,

});

module.exports = mongoose.model("orders", schema);
