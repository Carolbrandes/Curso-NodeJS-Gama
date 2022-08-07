import express from "express";
import routes from "./routes";
import db from './database'


const app = express();

app.use(express.json());

db.hasConnection()

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(3000, () => console.log("servidor rodando na porta 3000"));
