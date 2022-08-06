"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atendimentos = exports.Psicologos = exports.Pacientes = void 0;
const Pacientes_1 = __importDefault(require("./Pacientes"));
exports.Pacientes = Pacientes_1.default;
const Psicologos_1 = __importDefault(require("./Psicologos"));
exports.Psicologos = Psicologos_1.default;
const Atendimentos_1 = __importDefault(require("./Atendimentos"));
exports.Atendimentos = Atendimentos_1.default;
Pacientes_1.default.belongsToMany(Psicologos_1.default, {
    foreingKey: "produto_id",
    through: Atendimentos_1.default,
});
Psicologos_1.default.belongsToMany(Pacientes_1.default, {
    foreingKey: "categoria_id",
    through: Atendimentos_1.default,
});
