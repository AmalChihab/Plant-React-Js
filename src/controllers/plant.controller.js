const Plant = require('../models/plant.model');

exports.findAll = (req, res) => {
    Plant.getAll(null, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Error occurred while retrieving plants"
            });
        } else {
            res.send(data);
        }
    });
};
