module.exports = (app) => {
    const plants = require("../controllers/plant.controller.js");
    const users = require("../controllers/user.controller.js");
    const orders = require("../controllers/order.controller.js");
    const { checkDuplicateUsernameOrEmail } = require('../middleware/verifySignUp');
    const controller = require('../controllers/auth.controller');
    const { verifyToken } = require('../middleware/authJwt');
    var router = require("express").Router();


    // Retrieve all Plants
    router.get('/', [verifyToken], plants.findAll);


    // Retrieve a single Plant with id
    router.get("/:id", plants.findOne);

    router.post('/register', users.registerUser);

    router.post('/createOrder', orders.createOrder);

    router.post(
        '/auth/signup',
        [checkDuplicateUsernameOrEmail],
        controller.signup
      );
    
    router.post('/auth/signin', controller.signin);
    
    // Attach the router to the app
    app.use("/api/plants", router);
};