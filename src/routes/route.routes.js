module.exports = app => {
    const plants = require('../controllers/plant.controller');
    const router = require('express').Router();

    router.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
        next();
    });

    // Retrieve all plants
    router.get("/", plants.findAll);

    app.use('/api/plants', router);
};
