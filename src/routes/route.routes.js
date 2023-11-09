module.exports = (app) => {
    const plants = require("../controllers/plant.controller.js");
    const users = require("../controllers/user.controller.js");
    const orders = require("../controllers/order.controller.js");

    var router = require("express").Router();

    // Create a new Plant
    //  router.post("/", plants.create);

    // Retrieve all Plants
    router.get("/", plants.findAll);

    // Retrieve a single Plant with id
    router.get("/:id", plants.findOne);

    router.post('/register', users.registerUser);

    router.post('/createOrder', orders.createOrder);

     // Update a Plant with id
    // router.put("/:id", plants.update);

     // Delete a Plant with id
    // router.delete("/:id", plants.delete);

    // Delete all Plants
    // router.delete("/", plants.deleteAll);

    // Attach the router to the app
    app.use("/api/plants", router);
};