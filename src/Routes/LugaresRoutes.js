const express = require("express");
const lugarController = require("../Controller/LugaresController");
const router = express.Router();

router.get("/", (req, res) => lugarController.consultarLugares(req, res));
router.post("/", (req, res) => lugarController.cadastrarLugares(req, res));

module.exports = router;