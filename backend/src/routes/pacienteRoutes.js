const express = require("express");
const router = express.Router();

const pacienteController = require("../controllers/PacienteController");
const auth = require("../middlewares/authMiddleware");

// criar paciente (protegido)
router.post("/", auth, pacienteController.create);

// listar pacientes (protegido)
router.get("/", auth, pacienteController.findAll);

module.exports = router;