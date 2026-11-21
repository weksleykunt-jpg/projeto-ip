const express = require("express");
const app = express();

app.set("trust proxy", true);

app.get("/", (req, res) => {
  res.send(`
    <h1>Projeto de análise de acessos</h1>
    <p>Este site registra o IP público
    e o horário do acesso para fins de demonstração.</p>
    <button onclick="fetch('/registrar')">
      Registrar meu acesso
    </button>
  `);
});

app.get("/registrar", (req, res) => {
  const ip = req.ip;

  console.log({
    ip: ip,
    horario: new Date().toISOString()
  });

  res.send("Acesso registrado para demonstração.");
});

app.listen(process.env.PORT || 3000);
