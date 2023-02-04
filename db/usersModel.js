const mongoose = require("mongoose");

const schema= mongoose.Schema({
    name:String,
    phone:Number,
    password:String
})

module.exports=mongoose.model("users",schema)