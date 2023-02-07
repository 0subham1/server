require("dotenv").config();

const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const items = require("../db/itemsModel");

router.get("/items", async (req, res) => {
  let result = await items.find();
  res.send(result);
});
 
router.get("/items/:_id", async (req, res) => {
  let result = await items.findOne(req.params);
  res.send(result);
});
router.post("/addItem",async(req,res)=>{
let result=await new items(req.body).save()
  res.send(result)
})

router.put("/editItem/:_id", async (req, res) => {
  let result = await items.updateOne(req.params, { $set: req.body });
  res.send(result);
});

router.delete("/deleteItem/:_id", async (req, res) => {
  let result = await items.deleteOne(req.params);
    res.send(result);
});
module.exports = router;
