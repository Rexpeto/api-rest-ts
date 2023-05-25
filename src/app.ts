import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import db from "./config/mongo";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

db().then(() => console.log(`Conectado a mongoDB`));

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});

app.use(router);
