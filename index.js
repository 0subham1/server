require("dotenv").config();
const PORT = process.env.PORT || 4000;
require("./db/config");

const express = require("express");
const app = express();
app.use(express.json()); //middleware

const cors = require("cors");
app.use(cors());
 

//API IMPORTS
app.use("",require("./API/usersApi"))
app.use("",require("./API/itemsApi"))
app.use("",require("./API/ordersApi"))

const users = require("./db/usersModel");

app.get("/users1", async (req, res) => {
  let result = await users.find();
  res.send(result);
});

app.get("/",  (req, res) => {
  res.send("hello world");
});
app.listen(PORT, () => {
  console.log("port listening on", PORT);
});
