const pool = require("../config/db");
const tipoLugarModel = require("../model/TipoLugarModel");

class TipoLugarService {
   async consultarTipoLugar() {
        try {
          const tipoLugar = await pool.query("SELECT * FROM tipo_lugar");
          return tipoLugar.rows.map((tipoLugar) => new tipoLugarModel(tipoLugar));
        } catch (erro) {
          throw new Error("Erro ao buscar tipo de lugar: " + erro.message);
        }
      }
  
       async cadastrarTipoLugar(body){
            const { descricao, prioridade_evacuacao, foto_url } = body;
            try{
              const tipoLugar = await pool.query(`INSERT INTO tipo_lugar 
                            (descricao, prioridade_evacuacao, foto_url) 
               VALUES ($1, $2, $3) RETURNING *;`, 
               [descricao, prioridade_evacuacao, foto_url]);
              return new tipoLugarModel(tipoLugar.rows[0]);
            }catch(erro){
               throw new Error("Erro ao cadastrar tipo de lugar: " + erro.message);                   
            }                    
        }
  
   async consultarTipoLugarPorId(id) {
    try {
      const tipoLugarPorId = await pool.query(
        `
            SELECT * FROM tipo_lugar WHERE id = $1                                      
       `,
        [id],
      );
      return new tipoLugarModel(tipoLugarPorId.rows[0]) || null;
    } catch (error) {
       throw new Error("Erro ao buscar tipo de lugar por ID: " + error.message);
    }
  }                          
}

module.exports = new TipoLugarService();