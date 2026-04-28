const express = require("express");
const pool = require("./config/db");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const pessoaRoutes = require("./Routes/PessoaRoutes");
const voluntarioRoutes = require("./Routes/VoluntarioRoutes");
const tipoLugarRoutes = require("./Routes/TipoLugarRoutes");
const lugarRoutes = require("./Routes/LugaresRoutes");

app.use("/voluntario", voluntarioRoutes);
app.use("/pessoa", pessoaRoutes);
app.use("/tipoLugar", tipoLugarRoutes);
app.use("/lugar", lugarRoutes);

module.exports = app;
