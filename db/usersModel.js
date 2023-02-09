const mongoose = require("mongoose");

const schema= mongoose.Schema({
    name:String,
    phone:Number,
    password:String,
    isAdmin:Boolean
})

module.exports=mongoose.model("users",schema)