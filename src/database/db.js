import path from "path";
import Sequelize from "sequelize";

// This is why we can't have nice things
// https://github.com/sequelize/sequelize/issues/3781
import pg from "pg";
delete pg.native;

var env = "development";
var config = require("../../configs/db.json")[env];

var sequelize = new Sequelize(config.database, config.username, config.password, config);

var Quest = sequelize.import(path.resolve(__dirname, "entities/Quest"));
var User = sequelize.import(path.resolve(__dirname, "entities/User"));

sequelize.sync({force: true});

var db = {
    // Expose sequelize
    sequelize,

    // Entities
    Quest,
    User
};

export default db;
