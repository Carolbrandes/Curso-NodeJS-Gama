import {  Sequelize } from 'sequelize-typescript'
import { Atendimentos, Pacientes, Psicologos } from '../models'

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbHost = process.env.DB_HOST as string
const dbDriver = process.env.DB_DRIVER as any
const dbPassword = process.env.DB_PASSWORD as string

export const sequelizeConnection = () => {
    let connection: any

    if(connection){
        console.log('já existe conexao')
        return connection
    }

    console.log('primeira conexão')

    connection = new Sequelize(dbName, dbUser, dbPassword, {
        host: dbHost,
        dialect: dbDriver
      })
      connection.addModels([Psicologos, Pacientes, Atendimentos])

      return connection
}

