const prisma = require("../config/prisma");

class PacienteRepository {

    async criar(dados) {
        return await prisma.paciente.create({
            data: dados
        });
    }

    async listarTodos() {
        return await prisma.paciente.findMany();
    }
}

module.exports = new PacienteRepository();