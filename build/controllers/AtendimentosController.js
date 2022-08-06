"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const PacientesController_1 = __importDefault(require("./PacientesController"));
const PsicologosController_1 = __importDefault(require("./PsicologosController"));
const AtendimentosController = {
    getAllAtendimentos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const atendimentos = yield models_1.Pacientes.findAll({
                    include: models_1.Pacientes,
                    Psicologos: models_1.Psicologos,
                });
                res.status(200).json(atendimentos);
            }
            catch (error) {
                res.status(500).send(JSON.stringify({
                    message: error.message,
                }));
            }
        });
    },
    getAtendimentoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, paciente_id, psicolog_id } = req.params;
            if (!id && !paciente_id && !psicolog_id)
                return res
                    .status(400)
                    .json("Nenhum Id para buscar o atendimento foi enviado");
            try {
                let atendimento;
                if (id) {
                    atendimento = yield models_1.Atendimentos.find({
                        where: {
                            id,
                        },
                    });
                }
                if (paciente_id) {
                    atendimento = yield models_1.Atendimentos.find({
                        where: {
                            paciente_id,
                        },
                    });
                }
                if (psicolog_id) {
                    atendimento = yield models_1.Atendimentos.find({
                        where: {
                            psicolog_id,
                        },
                    });
                }
                res.status(200).json(atendimento);
            }
            catch (error) {
                res.status(500).send(JSON.stringify({
                    message: error.message,
                }));
            }
        });
    },
    postNewAtendimento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { data_atendimento, paciente_id, psicolog_id, observacao } = req.body;
            try {
                const hasPacienteId = yield PacientesController_1.default.getPacienteById(paciente_id, res);
                const hasPsicologId = yield PsicologosController_1.default.getPsicologoById(psicolog_id, res);
                if (!hasPacienteId)
                    return res.status(400).json("Id do paciente não existe");
                if (!paciente_id)
                    return res.status(400).json("Id do paciente não foi enviado");
                if (!hasPsicologId)
                    return res.status(400).json("Id do psicologo não existe");
                if (!psicolog_id)
                    return res.status(400).json("Id do psicologo não foi enviado");
                if (!observacao)
                    return res.status(400).json("Observação não foi enviada");
                const newAtendimento = yield models_1.Pacientes.create({
                    data_atendimento,
                    paciente_id,
                    psicolog_id,
                    observacao,
                });
                console.log("newAtendimento =>", newAtendimento);
                res.status(201).json(newAtendimento);
            }
            catch (error) {
                res.status(500).send(JSON.stringify({
                    message: error.message,
                }));
            }
        });
    },
    deletePaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield models_1.Pacientes.destroy({
                    where: {
                        id,
                    },
                });
                res.status(204);
            }
            catch (error) {
                res.status(500).send(JSON.stringify({
                    message: error.message,
                }));
            }
        });
    },
    updateAtendimento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { paciente_id, psicolog_id, observacao } = req.body;
            if (!id)
                return res.status(400).json("Id do atendimento não foi enviado");
            try {
                yield models_1.Atendimentos.update({ paciente_id, psicolog_id, observacao }, { where: { id } });
                res.status(200);
            }
            catch (error) {
                res.status(500).send(JSON.stringify({
                    message: error.message,
                }));
            }
        });
    },
};
exports.default = AtendimentosController;
