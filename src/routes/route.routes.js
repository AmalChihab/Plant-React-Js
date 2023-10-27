module.exports = app => {
    const plants = require('../controllers/plant.controller');
    const router = require('express').Router();

    router.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
        next();
    });

    // Retrieve all plants
    router.get("/", plants.findAll);

    router.get("/:id", plants.findOne);

    // Create a plant
    router.post("/", plants.create);

    // Update a plant
    router.put("/:id",plants.update);

    // Delete a plant
    router.delete("/:id",plants.delete);

    // Delete all plants
    router.delete("/", plants.deleteAll);

    app.use('/api/plants', router);
};
