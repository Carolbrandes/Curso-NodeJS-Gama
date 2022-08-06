"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const sequelize_1 = require("sequelize");
const Psicologos = database_1.default.define("Psicologos", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    senha: {
        type: sequelize_1.DataTypes.STRING
    },
    apresentacao: {
        type: sequelize_1.DataTypes.STRING
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    },
    updateAt: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    tableName: "psicologos",
    timestamps: true,
    underscored: true,
    freezeTableName: true
});
exports.default = Psicologos;
