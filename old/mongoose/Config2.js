const mongoose =require("mongoose")
// mongoose.connect("mongodb://127.0.0.1:27017/eCommerce")
let url="mongodb+srv://eCommerce:eCommerce@cluster0.3wz3tca.mongodb.net/eCommerceDB?retryWrites=true&w=majority"
mongoose.connect(url)