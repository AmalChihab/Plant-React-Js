const User = require("../models/user.model");

exports.registerUser = async (req, res) => {
    const { name, email, address } = req.body;
      
    try {
      const newUser = new User({
        name,
        email,
        address,
      });
  
      const savedUser = await newUser.save();
  
      console.log("User registered:", savedUser); // Add this line for debugging
  
      res.json(savedUser);
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Failed to register user", details: error.message });
      }
  };
  

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Verify the password (you can use a library like bcrypt)
      const passwordMatch = await comparePasswords(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ error: "Incorrect password" });
      }
  
      // Generate a JWT token and send it back to the client
      const token = generateAuthToken(user);
  
      res.json({ token });
    } catch (error) {
      res.status(500).json({ error: "Failed to log in" });
    }
  };
  