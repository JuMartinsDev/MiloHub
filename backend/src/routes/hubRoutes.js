const express = require("express");
const router = express.Router();

const alertaService = require("../services/AlertaService");
const hubService = require("../services/HubService");

router.post("/message", async (req, res) => {
  const { message, channel } = req.body;

  if (!message) {
    return res.status(400).json({ erro: "Mensagem obrigatória" });
  }

  const text = message.toLowerCase();

  let intent = "GENERIC";
  let response = "Mensagem registrada no HUB.";

  if (text.includes("remédio")) {
    intent = "MEDICATION_ALERT";
    response = "Alerta de medicação criado e registrado no sistema.";
  }

  if (text.includes("joão")) {
    intent = "PATIENT_IDENTIFIED";
    response += " Paciente João identificado.";
  }

  if (text.includes("não tomou")) {
    intent = "MISSED_MEDICATION";
    response = "Paciente possivelmente perdeu dose. Alerta gerado.";
  }

  // SALVAR HISTÓRICO
  await hubService.saveMessage({
    input: message,
    response,
    intent,
    channel: channel || "web"
  });

  // SALVAR ALERTA SE FOR CASO
  if (intent !== "GENERIC") {
    await alertaService.create({
      mensagem: message,
      intent,
      channel: channel || "web"
    });
  }

  return res.json({
    channel: channel || "web",
    input: message,
    intent,
    response
  });
});

module.exports = router;