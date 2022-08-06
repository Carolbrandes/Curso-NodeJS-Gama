import express from "express";
import routes from "./routes";
import {sequelizeConnection} from "./database";

const app = express();

sequelizeConnection();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);


app.listen(3000, () => console.log("servidor rodando na porta 3000"));
