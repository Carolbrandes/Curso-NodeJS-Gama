import { Psicologos } from "../models";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";



export const authController = {
  async login(req: Request, res: Response) {
    const { email, senha }: any = req.body;

    const usuario: any = await Psicologos.findOne({
      where: {
        email,
      },
    });

    if (!usuario) {
      return res.status(400).json("Email não cadastrado");
    }

    if (!bcrypt.compareSync(senha, usuario.senha)) {
      // 401 e nao autorizado
      return res.status(401).json("Senha incorreta");
    }

    const token = jwt.sign(
      {
        id: usuario.id,
        email: usuario.email,
        nome: usuario.nome,
      },
      process.env.KEY || ''
    );

    return res.json(token);
  },
};


