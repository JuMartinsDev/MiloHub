const pacienteService = require("../services/PacienteService");

class PacienteController {

  async create(req, res) {
    try {
      const paciente = await pacienteService.create(req.body);
      return res.json(paciente);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }

  async findAll(req, res) {
    try {
      const pacientes = await pacienteService.findAll();
      return res.json(pacientes);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  }
}

module.exports = new PacienteController();