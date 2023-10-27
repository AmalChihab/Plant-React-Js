const express = require('express');
const cors = require('cors');
const app = express();

require('./routes/route.routes')(app);

app.use(cors({
    origin: ['http://localhost:8081', 'http://localhost:3000'], 
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.json({ message: "Welcome to the plant application" });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
