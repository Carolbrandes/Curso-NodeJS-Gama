import {sequelizeConnection} from "../database";
import {Pacientes} from "./Pacientes";
import {Psicologos} from "./Psicologos";


import {
  Sequelize,
  Model,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

import sequelize from "sequelize/types/sequelize";


interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id: CreationOptional<number>;
  name: string;
}

export class Atendimentos extends Model{
  static find(arg0: { where: { id: string; }; }): any {
    throw new Error("Method not implemented.");
  }
}

Atendimentos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_atendimento: {
      type: DataTypes.DATE,
    },
    paciente_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Pacientes,
        key: 'id'
      }
    },
    psicologo_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Psicologos,
        key: 'id'
      }
    },
    observacao: {
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updateAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "atendimentos",
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    sequelize: new Sequelize
  }
)


