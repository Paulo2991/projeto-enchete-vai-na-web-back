const pool = require("../config/db");
const VoluntarioModel = require("../model/VoluntarioModel");

class VoluntarioService {
  async consultarVoluntarios() {
      try {
        const voluntarios = await pool.query("SELECT * FROM voluntarios");
        return voluntarios.rows.map((voluntario) => new VoluntarioModel(voluntario));
      } catch (erro) {
        throw new Error("Erro ao buscar voluntarios: " + erro.message);
      }
    }

     async cadastrarVoluntarios(body){
          const { id_pessoas, recurso, descricao, esta_disponivel } = body;
          try{
            const voluntarios = await pool.query(`INSERT INTO voluntarios (id_pessoas, recurso, descricao, esta_disponivel) 
             VALUES ($1, $2, $3, $4) RETURNING *;`, 
             [id_pessoas, recurso, descricao, esta_disponivel]);
            return new VoluntarioModel(voluntarios.rows[0]);
          }catch(erro){
             throw new Error("Erro ao cadastrar voluntarios: " + erro.message);                   
          }                    
      }

 async consultarVoluntarioPorId(id) {
  try {
    const voluntarioPorId = await pool.query(
      `
          SELECT * FROM voluntarios WHERE id = $1                                      
     `,
      [id],
    );
    return new VoluntarioModel(voluntarioPorId.rows[0]) || null;
  } catch (error) {
     throw new Error("Erro ao buscar voluntário por ID: " + error.message);
  }
}

  async consultarVonluntariosDisponiveis(){
    try {
      const voluntariosDisponiveis = await pool.query(`
        SELECT p.nome,p.contato,p.endereco,v.recurso,v.descricao,v.esta_disponivel 
        FROM pessoa as p JOIN voluntarios as v on v.id_pessoas = p.id`);
      return voluntariosDisponiveis.rows.map((voluntarioDisponivel) => ({
        nome: voluntarioDisponivel.nome,
        contato: voluntarioDisponivel.contato,
        endereco: voluntarioDisponivel.endereco,
        recurso: voluntarioDisponivel.recurso,
        descricao: voluntarioDisponivel.descricao,
        esta_disponivel: voluntarioDisponivel.esta_disponivel,
    }));
    } catch (erro) {
      throw new Error("Erro ao buscar voluntarios disponiveis: " + erro.message);
    }
  }
}

module.exports = new VoluntarioService();
