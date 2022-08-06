import { Atendimentos, Pacientes, Psicologos } from "../models";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";

export const PsicologosController = {
  async getAllPsicologos(req: Request, res: Response) {
    try {
      const psicologos = await Psicologos.findAll();
      res.status(200).json(psicologos);
    } catch (error: any) {
      res.status(500).send(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  },

  async getPsicologoById(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) return res.status(400).json("Id do psicologo não foi enviado");

    try {
      const psicologo = await Psicologos.find({
        where: {
          id,
        },
      });
      res.status(200).json(psicologo);
    } catch (error: any) {
      res.status(500).send(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  },

  async postNewPsicologo(req: Request, res: Response) {
    const { nome, email, senha, apresentacao } = req.body;
    const senhaCrypt = bcrypt.hashSync(senha, 10);

    try {
      const newPsicologo = await Pacientes.create({
        nome,
        email,
        senha: senhaCrypt,
        apresentacao,
      });

      console.log("newPaciente =>", newPsicologo);

      res.status(201).json(newPsicologo);
    } catch (error: any) {
      res.status(500).send(
        JSON.stringify({
          message: error.message,
        })
      );
    }
  },

  async deletePsicologo(req: Request, res: Response) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json("Id do psicologo não foi enviado");

      await Psicologos.destroy({
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

  async updatePsicologo(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, email, senha, apresentacao } = req.body;

    if (!id) return res.status(400).json("id do psicologo não enviado");

    try {
      let senhaCrypt;
      if (senha) {
        senhaCrypt = bcrypt.hashSync(senha, 10);
      }
      await Pacientes.update(
        { nome, email, senha: senhaCrypt, apresentacao },
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

