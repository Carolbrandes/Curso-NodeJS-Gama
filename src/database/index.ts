import {  Sequelize } from 'sequelize'

const dbName = process.env.DB_NAME as string
const dbUser = process.env.DB_USER as string
const dbPassword = process.env.DB_PASSWORD

let sequelize: any = {}

try{
 sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: 'mysql',
 })
}catch(error){
 console.log('erro na conexão com db', error)
}

async function hasConection(){
 try{
     await sequelize.authenticate()
     console.log('bd conectado')
 }catch(error){
     console.error('erro ao tentar se conectar ao bd', error)
 }
}

Object.assign(sequelize, {hasConection})

export default sequelize