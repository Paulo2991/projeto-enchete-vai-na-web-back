const pessoaService = require("../service/PessoaService");

class PessoaController {
  async consultarPessoas(req, res) {
    const pessoas = await pessoaService.consultarPessoas();
    res.json(pessoas);
  }

  async cadastrarPessoas(req, res) {
    const cadastroPessoas = await pessoaService.cadastrarPessoas(req.body);
    res.status(201).json({
      mensagem: "Pessoa cadastrada com sucesso",
      pessoa: cadastroPessoas,
    });
  }
}

module.exports = new PessoaController();
