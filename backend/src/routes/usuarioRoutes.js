const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/UsuarioController");

router.post("/login", usuarioController.login);

module.exports = router;