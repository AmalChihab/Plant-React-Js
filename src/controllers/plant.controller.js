const { Plant } = require("../models/plant.model");

// Create a new Plant
// exports.create = async (req, res) => {
//     try {
//         const plant = await Plant.create(req.body);
//         res.json(plant);
//     } catch (err) {
//         res.status(500).json({ error: "Failed to create plant" });
//     }
// };

// Retrieve all Plants
exports.findAll = async (req, res) => {
    try {
        const plants = await Plant.find();
        res.json(plants);
    } catch (err) {
        res.status(500).json({ error: "Failed to retrieve plants" });
    }
};

// Retrieve a single Plant with id
exports.findOne = async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        if (!plant) {
            return res.status(404).json({ error: "Plant not found" });
        }
        res.json(plant);
    } catch (err) {
        res.status(500).json({ error: "Failed to retrieve plant" });
    }
};

// // Update a Plant with id
// exports.update = async (req, res) => {
//     try {
//         const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//         });
//         if (!updatedPlant) {
//             return res.status(404).json({ error: "Plant not found" });
//         }
//         res.json(updatedPlant);
//     } catch (err) {
//         res.status(500).json({ error: "Failed to update plant" });
//     }
// };
//
// // Delete a Plant with id
// exports.delete = async (req, res) => {
//     try {
//         const deletedPlant = await Plant.findByIdAndRemove(req.params.id);
//         if (!deletedPlant) {
//             return res.status(404).json({ error: "Plant not found" });
//         }
//         res.json({ message: "Plant deleted successfully" });
//     } catch (err) {
//         res.status(500).json({ error: "Failed to delete plant" });
//     }
// };
//
// // Delete all Plants
// exports.deleteAll = async (req, res) => {
//     try {
//         await Plant.deleteMany({});
//         res.json({ message: "All plants deleted successfully" });
//     } catch (err) {
//         res.status(500).json({ error: "Failed to delete all plants" });
//     }
// };