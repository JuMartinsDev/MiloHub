const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class PacienteService {

  async create(data) {
    return await prisma.paciente.create({
      data
    });
  }

  async findAll() {
    return await prisma.paciente.findMany();
  }
}

module.exports = new PacienteService();