import { Atendimentos, Pacientes, Psicologos } from "../models";
import { Request, Response } from "express";

export const PacientesController = {
  async getAllPacientes(req: Request, res: Response) {
    try {
      const pacientes = await Pacientes.findAll();
      res.status(200).json(pacientes);
    } catch (error: any) {
      res.status(500).send(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  },

  async getPacienteById(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) return res.status(400).json("Id do paciente não foi enviado");

    try {
      const paciente = await Pacientes.find({
        where: {
          id,
        },
      });
      res.status(200).json(paciente);
    } catch (error: any) {
      res.status(500).send(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  },

  async postNewPaciente(req: Request, res: Response) {
    const { nome, email, idade } = req.body;

    try {
      const newPaciente = await Pacientes.create({
        nome,
        email,
        idade,
      });

      console.log("newPaciente =>", newPaciente);

      res.status(201).json(newPaciente);
    } catch (error: any) {
      res.status(500).send(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  },

  async deletePaciente(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json("Id do paciente não foi enviado");

      await Pacientes.destroy({
        where: {
          id,
        },
      });

      res.status(204);
    } catch (error: any) {
      res.status(500).send(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  },

  async updatePaciente(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, email } = req.body;

    if (!id) return res.status(400).json("Id do paciente não foi enviado");

    try {
      await Pacientes.update({ nome, email }, { where: { id } });

      res.status(200);
    } catch (error: any) {
      res.status(500).send(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  },
};

