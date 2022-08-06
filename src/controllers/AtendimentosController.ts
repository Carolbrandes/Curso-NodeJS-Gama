import { Atendimentos, Pacientes, Psicologos } from "../models";

import { Request, Response } from "express";
import { PacientesController } from "./PacientesController";
import { PsicologosController } from "./PsicologosController";

export const AtendimentosController = {
  async getAllAtendimentos(req: Request, res: Response) {
    try {
      const atendimentos = await Pacientes.findAll({
        include: Pacientes
      });
      res.status(200).json(atendimentos);
    } catch (error: any) {
      res.status(500).send(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  },

  async getAtendimentoById(req: Request, res: Response) {
    const { id, paciente_id, psicolog_id } = req.params;

    if (!id && !paciente_id && !psicolog_id)
      return res
        .status(400)
        .json("Nenhum Id para buscar o atendimento foi enviado");

    try {
      let atendimento;

      if (id) {
        atendimento = await Atendimentos.find({
          where: {
            id,
          },
        });
      }

      if (paciente_id) {
        atendimento = await Atendimentos.find({
          where: {
            id: paciente_id,
          },
        });
      }

      if (psicolog_id) {
        atendimento = await Atendimentos.find({
          where: {
            id: psicolog_id
          },
        });
      }

      res.status(200).json(atendimento);
    } catch (error: any) {
      res.status(500).send(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  },

  async postNewAtendimento(req: Request, res: Response) {
    const { data_atendimento, paciente_id, psicolog_id, observacao } = req.body;

    try {
      const hasPacienteId = await PacientesController.getPacienteById(
        paciente_id,
        res
      );
      const hasPsicologId = await PsicologosController.getPsicologoById(
        psicolog_id,
        res
      );

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

      const newAtendimento = await Pacientes.create({
        data_atendimento,
        paciente_id,
        psicolog_id,
        observacao,
      });

      console.log("newAtendimento =>", newAtendimento);

      res.status(201).json(newAtendimento);
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

  async updateAtendimento(req: Request, res: Response) {
    const { id } = req.params;
    const { paciente_id, psicolog_id, observacao } = req.body;

    if (!id) return res.status(400).json("Id do atendimento não foi enviado");

    try {
      await Atendimentos.update(
        { paciente_id, psicolog_id, observacao },
        { where: { id } }
      );

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


