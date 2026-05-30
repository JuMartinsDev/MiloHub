const pacienteService = require("../services/PacienteService");

class PacienteController {

    async criar(req, res) {
        try {

            const paciente = await pacienteService.criarPaciente(req.body);

            return res.status(201).json(paciente);

        } catch (error) {

            return res.status(500).json({
                erro: error.message
            });

        }
    }

    async listar(req, res) {
        try {

            const pacientes = await pacienteService.listarPacientes();

            return res.json(pacientes);

        } catch (error) {

            return res.status(500).json({
                erro: error.message
            });

        }
    }

}

module.exports = new PacienteController();