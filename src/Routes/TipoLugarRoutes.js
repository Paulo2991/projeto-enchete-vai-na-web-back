const express = require("express");
const tipoLugarController = require("../Controller/TipoLugarController");
const router = express.Router();

router.get("/", (req,res) => tipoLugarController.consultarTipoLugar(req,res));
router.get("/:id", (req,res) => tipoLugarController.consultarTipoLugarPorId(req,res));
router.post("/", (req,res) => tipoLugarController.cadastrarTipoLugar(req,res));

module.exports = router;