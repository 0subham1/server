require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");
const app = express();
const router = express.Router();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const product = require("../db/productModel");

router.get("/prodList", async (req, res) => {
  let result = await product.find();
  res.send(result);
});

module.exports = router;
