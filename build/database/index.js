"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER;
const dbPassword = process.env.DB_PASSWORD;
const sequelizeConnection = () => {
    let connection;
    if (connection) {
        console.log('já existe conexao');
        return connection;
    }
    console.log('primeira conexão');
    connection = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
        host: dbHost,
        dialect: dbDriver
    });
    return connection;
};
exports.default = sequelizeConnection;
