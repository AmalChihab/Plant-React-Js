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

Plant.update = (id, plant, result) => {
    sql.query('UPDATE plant SET name = ?, price = ?, water = ?, light = ?, category = ?, cover = ? WHERE id = ?', 
      [plant.name, plant.price, plant.water, plant.light, plant.category, plant.cover, id], (err, res) => {
      if (err) {
        console.log('Error:', err);
        result(err, null);
        return;
      }
      if (res.affectedRows === 0) {
        result({ kind: 'not_found' }, null);
        return;
      }
      console.log('Updated plant: ', { id: id, ...plant });
      result(null, { id: id, ...plant });
    });
  };
  
  Plant.delete = (id, result) => {
    sql.query('DELETE FROM plant WHERE id = ?', id, (err, res) => {
      if (err) {
        console.log('Error:', err);
        result(err, null);
        return;
      }
      if (res.affectedRows === 0) {
        result({ kind: 'not_found' }, null);
        return;
      }
      console.log('Deleted plant with id: ', id);
      result(null, res);
    });
  };

  Plant.create = (newPlant, result) => {
    sql.query('INSERT INTO plant SET ?', newPlant, (err, res) => {
      if (err) {
        console.log('Error:', err);
        result(err, null);
        return;
      }
      console.log('Created plant: ', { id: res.insertId, ...newPlant });
      result(null, { id: res.insertId, ...newPlant });
    });
  };

  Plant.findById = (id, result) => {
    sql.query('SELECT * FROM plant WHERE id = ?', id, (err, res) => {
        if (err) {
            console.log('Error:', err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log('Found plant with ID:', id);
            result(null, res[0]);
            return;
        }

        // Plant with the specified ID was not found
        result({ kind: 'not_found' }, null);
    });
};


module.exports = Plant;
