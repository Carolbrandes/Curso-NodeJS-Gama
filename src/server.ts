import express from "express";
import sequelize from "./database";

const server = express();

sequelize.hasConection()

server.listen(3000, () => console.log('servidor rodando na porta 3000'));

export default server;