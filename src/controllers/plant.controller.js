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

exports.create = (req, res) => {
    try {
        console.log("req body",req.body);
        if (!req.body.name) {
            return res.status(400).send({
                message: "Content cannot be empty!"
            });
        }

        console.log("req body: ", req.body);

        const newPlant = {
            name: req.body.name,
            price: req.body.price,
            water: req.body.water,
            light: req.body.light,
            category: req.body.category,
            cover: req.body.cover
        };

        console.log("new plant: ", newPlant);
        // Add a console log here to indicate that the function execution reached this point

        Plant.create(newPlant, (err, data) => {
            if (err) {
                console.log("Error creating plant: ", err);
                return res.status(500).send({
                    message: err.message || "Some error occurred while creating a new plant"
                });
            } else {
                res.send(data);
            }
        });
    } catch (error) {
        console.error("Error in create function: ", error);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
};


exports.findOne = (req, res) => {
    const id = req.params.id;

    Plant.findById(id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: "Error retrieving Plant with id=" + id
            });
        } else {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({ message: `Cannot find plant with id ${id}` });
            }
        }
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const updatedPlant = {
        name: req.body.name,
        price: req.body.price,
        water: req.body.water,
        light: req.body.light,
        category: req.body.category,
        cover: req.body.cover
    };

    Plant.update(id, updatedPlant, (err, data) => {
        if (err) {
            res.status(500).send({
                message: `Error updating Plant with id=${id}`
            });
        } else {
            if (data) {
                res.send({ message: "Plant was updated successfully" });
            } else {
                res.send({ message: `Cannot update plant with id=${id}` });
            }
        }
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Plant.delete(id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: `Error deleting Plant with id=${id}`
            });
        } else {
            if (data) {
                res.send({ message: "Plant was deleted successfully" });
            } else {
                res.send({ message: `Cannot delete plant with id=${id}` });
            }
        }
    });
};

exports.deleteAll = (req, res) => {
    Plant.deleteAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: "Error occurred while removing all plants"
            });
        } else {
            res.send({ message: `${data} Plants were deleted successfully!` });
        }
    });
};
