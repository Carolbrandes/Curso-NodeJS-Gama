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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const PacientesController = {
    getAllPacientes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pacientes = yield models_1.Pacientes.findAll();
                res.status(200).json(pacientes);
            }
            catch (error) {
                res.status(500).send(JSON.stringify({
                    message: error.message,
                }));
            }
        });
    },
    getPacienteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!id)
                return res.status(400).json("Id do paciente não foi enviado");
            try {
                const paciente = yield models_1.Pacientes.find({
                    where: {
                        id,
                    },
                });
                res.status(200).json(paciente);
            }
            catch (error) {
                res.status(500).send(JSON.stringify({
                    message: error.message,
                }));
            }
        });
    },
    postNewPaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, idade } = req.body;
            try {
                const newPaciente = yield models_1.Pacientes.create({
                    nome,
                    email,
                    idade,
                });
                console.log("newPaciente =>", newPaciente);
                res.status(201).json(newPaciente);
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
                if (!id)
                    return res.status(400).json("Id do paciente não foi enviado");
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
    updatePaciente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome, email } = req.body;
            if (!id)
                return res.status(400).json("Id do paciente não foi enviado");
            try {
                yield models_1.Pacientes.update({ nome, email }, { where: { id } });
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
exports.default = PacientesController;
