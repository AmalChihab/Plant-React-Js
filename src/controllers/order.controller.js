const Order = require("../models/order.model");

exports.createOrder = async (req, res) => {
    // Get the user ID from the session or any other way you're storing it
    const userId = req.body.userId;

    const total = req.body.total ;
  
    // Get the product IDs from the cart in req.body
    const productIds = req.body.cart.map((product) => product._id);
  
    // Create a new order document
    const newOrder = new Order({
      products: productIds,
      user: userId,
      total: total
    });
  
    try {
      const savedOrder = await newOrder.save();
  
      // Clear the user's cart
      // ...
  
      res.json(savedOrder);
    } catch (error) {
      res.status(500).json({ error: "Failed to create the order" });
    }
  };
  