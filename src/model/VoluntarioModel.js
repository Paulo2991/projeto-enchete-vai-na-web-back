class VoluntarioModel {
  constructor({ id, id_pessoas, recurso, descricao, esta_disponivel }) {
    this.id = id;
    this.id_pessoas = id_pessoas;
    this.recurso = recurso;
    this.descricao = descricao;
    this.esta_disponivel = esta_disponivel;
  }
}

module.exports = VoluntarioModel;
