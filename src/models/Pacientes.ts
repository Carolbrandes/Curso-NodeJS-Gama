import {sequelizeConnection} from "../database";

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
export class Pacientes extends Model {}
 Pacientes.init( 
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    idade: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updateAt: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "pacientes",
    timestamps: true,
    underscored: true,
    freezeTableName: true,
    sequelize: new Sequelize
  }
)
 
 


