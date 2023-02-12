require("dotenv").config();
const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const orders = require("../db/ordersModel");

router.get("/orders", async (req, res) => {
  let result = await orders.find();
  res.send(result);
});

router.get("/orders/:_id", async (req, res) => {
  let result = await orders.findOne(req.params);
  res.send(result);
});

router.get("/userOrders/:_id", async (req, res) => {
  let result = await orders.find({userId:req.params});
  res.send(result);
});

router.post("/addOrder", async (req, res) => {
  let orderList = await orders.find();
  let orderKey = "ORDER_" + (orderList.length + 1);
  let obj = { ...req.body, orderId: orderKey };
  let result = await new orders(obj).save();
  res.send(result);
});

router.put("/editOrder/:_id", async (req, res) => {
  let result = await orders.updateOne(req.params, { $set: req.body });
  res.send(result);
});

router.delete("/deleteOrder/:_id", async (req, res) => {
  let result = await orders.deleteOne(req.params);
  res.send(result);
});
module.exports = router;
