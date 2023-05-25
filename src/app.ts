import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});
