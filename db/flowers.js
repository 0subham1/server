const mongoose = require("mongoose");

const schema= mongoose.Schema({
    name:String,
    type:String,
    age:Number
})

module.exports=mongoose.model("flowers",schema)