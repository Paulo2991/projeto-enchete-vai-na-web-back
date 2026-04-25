const pool = require("../config/db");
const PessoaModel = require("../model/PessoaModel");
class PessoaService{
 
  async consultarPessoas() {
    try {
      const pessoas = await pool.query("SELECT * FROM pessoa");
      return pessoas.rows.map((pessoa) => new PessoaModel(pessoa));
    } catch (erro) {
      throw new Error("Erro ao buscar pessoas: " + erro.message);
    }
  }

  async cadastrarPessoas(body){
      const { nome,contato, endereco } = body;
      try{
        const pessoas = await pool.query(`INSERT INTO pessoa (nome, contato, endereco) 
         VALUES ($1, $2, $3) RETURNING *;`, 
         [nome, contato, endereco]);
        return new PessoaModel(pessoas.rows[0]);
      }catch(erro){
         throw new Error("Erro ao cadastrar pessoas: " + erro.message);                   
      }                    
  }
}

module.exports = new PessoaService();

