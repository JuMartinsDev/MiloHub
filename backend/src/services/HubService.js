const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class HubService {
  async saveMessage(data) {
    return prisma.hubMessage.create({ data });
  }
}

module.exports = new HubService();