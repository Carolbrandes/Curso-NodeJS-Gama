"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
const sequelize_1 = require("sequelize");
const Pacientes_1 = __importDefault(require("./Pacientes"));
const Psicologos_1 = __importDefault(require("./Psicologos"));
const Atendimentos = database_1.default.define("Atendimentos", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_atendimento: {
        type: sequelize_1.DataTypes.DATE,
    },
    paciente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Pacientes_1.default,
            key: 'id'
        }
    },
    psicologo_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: Psicologos_1.default,
            key: 'id'
        }
    },
    observacao: {
        type: sequelize_1.DataTypes.STRING
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
    },
    updateAt: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    tableName: "atendimentos",
    timestamps: true,
    underscored: true,
    freezeTableName: true,
});
exports.default = Atendimentos;
