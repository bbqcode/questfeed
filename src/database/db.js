import path from "path";
import Sequelize from "sequelize";

var env = "development";
var config = require("../../configs/db.json")[env];

var sequelize = new Sequelize(config.database, config.username, config.password, config);

var Quest = sequelize.import(path.resolve(__dirname, "entities/Quest"));

sequelize.sync({force: true});

var db = {
    // Expose sequelize
    sequelize,

    // Entities
    Quest
};

export default db;
