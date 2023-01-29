const mongoose = require("mongoose");
require("dotenv").config()

// const DB_URL =process.env.DB_URL
const DB_URL="mongodb+srv://eCommerce:eCommerce@cluster0.3wz3tca.mongodb.net/e_comm?retryWrites=true&w=majority";

console.log("DB_URL",DB_URL)

mongoose.connect(DB_URL,()=>{
  console.log("db connected")
});
