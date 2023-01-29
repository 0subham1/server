const mongoose =require("mongoose")

const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String
})
//                            collection  schema
module.exports= mongoose.model("category",productSchema)