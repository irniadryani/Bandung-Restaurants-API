require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE || "bandung_restaurant_api",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALECT || "postgres",
    port: process.env.DB_PORT || 5432
});

module.exports = sequelize;

// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize({
//     username: "postgres",
//     password: "irinn1601",
//     database: "bandung_restaurant_api",
//     host: "127.0.0.1",
//     dialect: "postgres",
//     port: 5432
// });


// module.exports = sequelize;
