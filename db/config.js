const mongoose = require("mongoose");
require("dotenv").config()
const dataBase=process.env.DATABASE

console.log(dataBase,"database")
const url =dataBase

mongoose.connect(url,()=>{
  console.log("db connected")
});
