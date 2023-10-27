const sql = require("./db");

const Plant = function(plant) {
    this.id = plant.id;
    this.name = plant.name;
    this.category = plant.category;
    this.water = plant.water;
    this.light = plant.light;
    this.price = plant.price;
    this.cover = plant.cover;
};

Plant.getAll = (name, result) => {
    let query = "SELECT * FROM plant";

    if (name) {
        query += ` WHERE name LIKE '%${name}%'`;
    }

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error : ", err);
            result(err, null);
            return;
        }

        result(null, res);
    });
};

module.exports = Plant;
