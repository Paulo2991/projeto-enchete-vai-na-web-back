const lugaresService = require("../service/LugaresService");

class LugaresController {
   async consultarLugares(req, res) {
       const lugares = await lugaresService.consultarLugares();
       res.json(lugares);
     }

     async cadastrarLugares(req,res){
         const cadastroLugares = await lugaresService.cadastrarLugares(req.body);
         res.status(201).json({
            mensagem: "Lugar cadastrado com sucesso",
            lugar: cadastroLugares                
         });                   
     }
}

module.exports = new LugaresController();
