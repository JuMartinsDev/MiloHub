const prisma = require("../config/prisma");

class UsuarioRepository {

    async criar(data) {
        return prisma.usuario.create({
            data
        });
    }

    async buscarPorEmail(email) {
        return prisma.usuario.findUnique({
            where: { email }
        });
    }
}

module.exports = new UsuarioRepository();