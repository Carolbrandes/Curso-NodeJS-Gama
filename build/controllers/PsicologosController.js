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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const PsicologosController = {
    getAllPsicologos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const psicologos = yield models_1.Psicologos.findAll();
                res.status(200).json(psicologos);
            }
            catch (error) {
                res.status(500).send(JSON.stringify({
                    message: error.message,
                }));
            }
        });
    },
    getPsicologoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            if (!id)
                return res.status(400).json("Id do psicologo não foi enviado");
            try {
                const psicologo = yield models_1.Psicologos.find({
                    where: {
                        id,
                    },
                });
                res.status(200).json(psicologo);
            }
            catch (error) {
                res.status(500).send(JSON.stringify({
                    message: error.message,
                }));
            }
        });
    },
    postNewPsicologo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, email, senha, apresentacao } = req.body;
            const senhaCrypt = bcryptjs_1.default.hashSync(senha, 10);
            try {
                const newPsicologo = yield models_1.Pacientes.create({
                    nome,
                    email,
                    senha: senhaCrypt,
                    apresentacao,
                });
                console.log("newPaciente =>", newPsicologo);
                res.status(201).json(newPsicologo);
            }
            catch (error) {
                res.status(500).send(JSON.stringify({
                    message: error.message,
                }));
            }
        });
    },
    deletePsicologo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!id)
                    return res.status(400).json("Id do psicologo não foi enviado");
                yield models_1.Psicologos.destroy({
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
    updatePsicologo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { nome, email, senha, apresentacao } = req.body;
            if (!id)
                return res.status(400).json("id do psicologo não enviado");
            try {
                let senhaCrypt;
                if (senha) {
                    senhaCrypt = bcryptjs_1.default.hashSync(senha, 10);
                }
                yield models_1.Pacientes.update({ nome, email, senha: senhaCrypt, apresentacao }, { where: { id } });
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
exports.default = PsicologosController;
