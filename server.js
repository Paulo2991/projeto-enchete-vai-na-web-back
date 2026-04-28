require("dotenv").config();
try {
  require("./server");
  const app = require("./src/app");

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("ERRO CRÍTICO NA INICIALIZAÇÃO:", error);
}
