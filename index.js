require("dotenv").config();
const PORT = process.env.PORT || 4000;
require("./db/config");

const express = require("express");
const app = express();
app.use(express.json()); //middleware

const cors = require("cors");
app.use(cors());


//API IMPORTS
app.use("",require("./API/userApi"))

app.use("",require("./API/productApi"))


app.listen(PORT, () => {
  console.log("port listening on", PORT);
});
