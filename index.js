require("dotenv").config();
const PORT = process.env.PORT || 4000;
// const PORT=4000

require("./db/config");
const users = require("./db/users");
const product = require("./db/product");
const flowers = require("./db/flowers");

const express = require("express");
const app = express();
app.use(express.json()); //middleware

const cors = require("cors");
app.use(cors());

const jwt = require("jsonwebtoken");
const jwtKey = "e-co_mmerce123";

const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];
  if (token) {
    //  token= token.split(' ')[1]
    console.log(token, "token");
    jwt.verify(token, jwtKey, (err, valid) => {
      if (err) {
        res.status(401).send("wrong token");
      } else {
        next();
      }
    });
  } else {
    res.status(403).send("token not found");
  }
};

//------------------------------

app.post("/signUp", async (req, res) => {
  let result = await new users(req.body).save();
  res.send(result);
});

app.post("/login", async (req, res) => {
  let result = await users.findOne(req.body).select("-password");
  if (result) {
    jwt.sign({ result }, jwtKey, { expiresIn: 20 }, (err, token) => {
      if (err) {
        res.send(err);
      } else {
        res.send({ result, token });
      }
    }); // Eg: 60, "2 days", "10h", "7d"
  }
});

app.get("/users", async (req, res) => {
  let result = await users.find();
  res.send("user list api");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/abc", (req, res) => {
  res.send("abc world");
});


app.get("/prodList", async (req, res) => {
  let result = await product.find();
  res.send(result);
});

app.delete("/deleteUser/:id", async (req, res) => {
  let result = await users.deleteOne({ _id: req.params.id });
  res.send(result);
});

app.get("/user/:id", async (req, res) => {
  let result = await users.findOne({ _id: req.params.id });
  res.send(result);
});

app.get("/flowers", async (req, res) => {
  let data = await flowers.find();
  res.send(data);
});

app.listen(PORT, () => {
  console.log("port listening on", PORT);
});
