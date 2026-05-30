const express = require("express");
const cors = require("cors");

const pacienteRoutes = require("./routes/pacienteRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/pacientes", pacienteRoutes);

app.get("/", (req, res) => {
    res.json({
        mensagem: "API Care Hub funcionando!"
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});