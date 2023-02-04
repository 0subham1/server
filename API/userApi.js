require("dotenv").config();
const PORT = process.env.PORT || 4000;

const express = require("express");
const app = express();
const router = express.Router();

app.use(express.json());
const cors = require("cors");
app.use(cors());

const users = require("../db/usersModel");
const jwt = require("jsonwebtoken");
const jwtKey = "jumpin";

const bcrypt = require("bcryptjs");

//------------------------------------------------
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

//-----------------------------------------------

//ADD
router.post("/signUp", async (req, res) => {
  let salt = await bcrypt.genSalt(10);
  let securePass = await bcrypt.hash(req.body.password, salt);
  let result = await users.create({
    name: req.body.name,
    phone: req.body.phone,
    password: securePass,
  });
  res.send(result);
});

// router.post("/signUp", async (req, res) => {
//     let result = await new users(req.body).save();
//     res.send(result);
//   });

//LOGIN 1
// router.post("/login", async (req, res) => {
//   let result = await users.findOne(req.body );
//   console.log(result,"res")
// if(result){
//   console.log(result,"result")
//   let passCheck=await bcrypt.compare(req.body.password,result?.password)

//   if(passCheck){
//     const auth=jwt.sign({result},jwtKey)
//     res.send({result,auth});

//   }else{
//     res.send("error")
//   }
//   res.send("eee")
  

// }
// });

// router.post("/login", async (req, res) => {
//   let result = await users.findOne(req.body).select("-password");
//   res.send(result);
// });


// .select("-password");
router.post("/login", async (req, res) => {
  let result = await users.findOne(req.body)
  if (result) {
    jwt.sign({ result }, jwtKey, { expiresIn: "12h" }, (err, token) => {
      if (err) {
        res.send(err);
      } else {
        res.send({ result, token });
      }
    }); // Eg: 60, "2 days", "10h", "7d"
  }
});

// router.post("/login", async (req, res) => {
//   let result = await users.findOne(req.body).select("-password");
// res.send(result)
// });

//UPDATE

//DELETE
router.delete("/deleteUser/:id", async (req, res) => {
  let result = await users.deleteOne({ _id: req.params.id });
  res.send(result);
});

//get LIST
router.get("/users", async (req, res) => {
  let result = await users.find();
  res.send(result);
});

//get DETAILS
router.get("/user/:id", async (req, res) => {
  let result = await users.findOne({ _id: req.params.id });
  res.send(result);
});

router.get("/user1", (req, res) => {
  res.send("hello user1");
});

//------------------------------------------------------


module.exports = router;
