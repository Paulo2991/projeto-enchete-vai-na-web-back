const pool = require("../config/db");
const LugaresModel = require("../model/LugaresModel");

class LugaresService{
  async consultarLugares() {
    try {
        const lugares = await pool.query("SELECT * FROM lugares");
        return lugares.rows.map((lugar) => new LugaresModel(lugar));
       } catch (erro) {
        throw new Error("Erro ao buscar lugares: " + erro.message);
      }
    }
    
    async cadastrarLugares(body){
          const { id_tipo, nome, status } = body;
          try{
            const lugares = await pool.query(`INSERT INTO lugares (id_tipo, nome, status) 
             VALUES ($1, $2, $3) RETURNING *;`, 
             [id_tipo, nome, status]);
            return new LugaresModel(lugares.rows[0]);
          }catch(erro){
             throw new Error("Erro ao cadastrar lugares: " + erro.message);                   
          }                    
      }
}

module.exports = new LugaresService();