const mongoose = require("mongoose");
const dbConfig = require("../config/db.config.js");
const User = require("./user.model.js");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.plant = require("./plant.model.js").Plant; // Make sure to use .Plant to access the Plant model
db.User = User;

module.exports = db;
