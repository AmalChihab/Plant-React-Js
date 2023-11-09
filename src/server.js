const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors"); 

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB
const dbUrl = "mongodb://127.0.0.1:27017/db";

// Enable CORS for all routes
app.use(cors());

// Include this middleware to parse JSON data from the request body
app.use(express.json());

mongoose
    .connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");

        const plantRoutes = require("./routes/route.routes")(app);

        // Start the Express server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err);
    });