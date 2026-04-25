const express = require("express");
const pessoaController = require("../Controller/PessoaController");
const router = express.Router();

router.get("/", (req,res) =>  pessoaController.consultarPessoas(req,res));
router.post("/", (req,res) =>  pessoaController.cadastrarPessoas(req,res));

module.exports = router;

