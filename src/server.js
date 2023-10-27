const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');



app.use(cors({
    origin: ['http://localhost:8081', 'http://localhost:3000'], 
}));


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
    res.json({ message: "Welcome to the plant application" });
});

require('./routes/route.routes')(app);

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
