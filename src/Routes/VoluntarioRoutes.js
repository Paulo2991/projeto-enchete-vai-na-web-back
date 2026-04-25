const express = require("express");
const VoluntarioController = require("../Controller/VoluntarioController");
const router = express.Router();

router.get("/", (req,res) => VoluntarioController.consultarVoluntarios(req,res));
router.get("/", (req,res) => VoluntarioController.consultarVoluntariosDisponiveis(req,res));
router.get("/:id", (req,res) => VoluntarioController.consultarVoluntarioPorId(req,res));
router.post("/", (req,res) => VoluntarioController.cadastrarVoluntarios(req,res));

module.exports = router;
