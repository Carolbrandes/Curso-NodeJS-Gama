"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import controllers
const authController_1 = __importDefault(require("../controllers/authController"));
const PacientesController_1 = __importDefault(require("../controllers/PacientesController"));
const PsicologosController_1 = __importDefault(require("../controllers/PsicologosController"));
const AtendimentosController_1 = __importDefault(require("../controllers/AtendimentosController"));
// import middlewares
const auth_1 = require("../middlewares/auth");
// import validations
const create_1 = require("../validations/psicologos/create");
const create_2 = require("../validations/pacientes/create");
const create_3 = require("../validations/atendimentos/create");
const login_1 = require("../validations/auth/login");
const routes = express_1.default.Router();
// pacientes
routes.get('/pacientes', auth_1.auth, PacientesController_1.default.getAllPacientes);
routes.post('/pacientes', auth_1.auth, create_2.validateCreate, PacientesController_1.default.postNewPaciente);
routes.put('/pacientes/:id', auth_1.auth, PacientesController_1.default.updatePaciente);
routes.delete('/pacientes/:id', auth_1.auth, PacientesController_1.default.deletePaciente);
// psicologos
routes.get('/psicologos', auth_1.auth, PsicologosController_1.default.getAllPsicologos);
routes.post('/psicologos', create_1.validateCreate, PsicologosController_1.default.postNewPsicologo);
routes.put('/psicologos/:id', auth_1.auth, PsicologosController_1.default.updatePsicologo);
routes.delete('/psicologos/:id', auth_1.auth, PsicologosController_1.default.deletePsicologo);
// atendimentos
routes.get('/atendimentos', auth_1.auth, AtendimentosController_1.default.getAllAtendimentos);
routes.post('/atendimentos', auth_1.auth, create_3.validateCreate, AtendimentosController_1.default.postNewAtendimento);
routes.put('/atendimentos/:id', auth_1.auth, AtendimentosController_1.default.updateAtendimento);
routes.delete('/atendimentos/:id', auth_1.auth, AtendimentosController_1.default.deletePaciente);
routes.post('/login', login_1.loginValidate, authController_1.default.login);
exports.default = routes;
