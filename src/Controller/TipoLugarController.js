const tipoLugarService = require("../service/TipoLugarService");

class TipoLugarController {
  async consultarTipoLugar(req, res) {
    const tipoLugares = await tipoLugarService.consultarTipoLugar();
    res.json(tipoLugares);
  }
  
  async cadastrarTipoLugar(req, res) {
    const cadastroTipoLugar = await tipoLugarService.cadastrarTipoLugar(req.body);
    res.status(201).json({
      mensagem: "Tipo de lugar cadastrado com sucesso",
      tipoLugar: cadastroTipoLugar,
    });
  }

  async consultarTipoLugarPorId(req, res){
    const tipoLugarPorId = await tipoLugarService.consultarTipoLugarPorId(req.params.id);
    res.json(tipoLugarPorId);                        
  }
}

module.exports = new TipoLugarController();