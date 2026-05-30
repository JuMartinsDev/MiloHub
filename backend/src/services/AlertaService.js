const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class AlertaService {
  async create(data) {
    return prisma.alerta.create({
      data: {
        mensagem: data.mensagem,
        intent: data.intent || "GENERIC",
        status: data.status || "PENDING"
      }
    });
  }
}

module.exports = new AlertaService();