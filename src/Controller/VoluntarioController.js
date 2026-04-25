const voluntarioService = require("../service/VoluntarioService");

class VoluntarioController{
    async consultarVoluntarios(req, res) {
      const voluntarios = await voluntarioService.consultarVoluntarios();
      res.json(voluntarios);
  }

  async consultarVoluntariosDisponiveis(req, res){
    const voluntariosDisponiveis = await voluntarioService.consultarVoluntariosDisponiveis();
    res.json(voluntariosDisponiveis);
  }

    async cadastrarVoluntarios(req, res){
      const cadastroVoluntarios = await voluntarioService.cadastrarVoluntarios(req.body);
      res.status(201).json({
        mensagem: "Voluntário cadastrado com sucesso",
        voluntario: cadastroVoluntarios
      });
    }

    async consultarVoluntarioPorId(req, res){
      const voluntariosPorId = await voluntarioService.consultarVoluntarioPorId(req.params.id);
       if (!voluntariosPorId) {
        return res.status(404).json({ erro: "Voluntário não encontrado" });
      }
      res.json(voluntariosPorId);
    }
}

module.exports = new VoluntarioController();
