class TipoLugarModel {
  constructor({ id, descricao, prioridade_evacuacao, foto_url }) {
    this.id = id;
    this.descricao = descricao;
    this.prioridade_evacuacao = prioridade_evacuacao;
    this.foto_url = foto_url;
  }
}

module.exports = TipoLugarModel;
