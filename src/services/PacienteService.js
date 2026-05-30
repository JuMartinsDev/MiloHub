const pacienteRepository = require("../repositories/PacienteRepository");

class PacienteService {

    async criarPaciente(dados) {
        return await pacienteRepository.criar(dados);
    }

    async listarPacientes() {
        return await pacienteRepository.listarTodos();
    }

}

module.exports = new PacienteService();