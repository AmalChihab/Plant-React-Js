const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Plant" }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  total:String
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
