const usuarioService = require("../services/UsuarioService");

class UsuarioController {

  async login(req, res) {
    try {
      const { email, senha } = req.body;

      const result = await usuarioService.login(email, senha);

      return res.json(result);

    } catch (error) {
      return res.status(400).json({
        erro: error.message
      });
    }
  }
}

module.exports = new UsuarioController();