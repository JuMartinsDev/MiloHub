const express = require("express");

const router = express.Router();

const pacienteController = require("../controllers/PacienteController");

router.post("/", pacienteController.criar);

router.get("/", pacienteController.listar);

module.exports = router;