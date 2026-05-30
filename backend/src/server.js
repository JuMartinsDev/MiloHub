require("dotenv").config();

const express = require("express");
const cors = require("cors");

const hubRoutes = require("./routes/hubRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");
const pacienteRoutes = require("./routes/pacienteRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use("/hub", hubRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/pacientes", pacienteRoutes);

// teste inicial
app.get("/", (req, res) => {
    res.json({ mensagem: "API Care Hub funcionando!" });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});