
const express = require("express");
const app = express();

app.set("trust proxy", 1);

// Registra o acesso automaticamente ao abrir a página
app.get("/", (req, res) => {
  const ip = req.ip;
  const horario = new Date().toISOString();

  console.log({
    evento: "Acesso ao site",
    ip: ip,
    horario: horario
  });

  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport"
            content="width=device-width, initial-scale=1.0">

      <title>Wekzley Security</title>

      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: #080808;
          color: #f5f5f5;
          font-family: Arial, sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .container {
          width: 100%;
          max-width: 480px;
          text-align: center;
        }

        .logo {
          width: 90px;
          height: 90px;
          border: 1px solid #444;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 32px;
          font-size: 38px;
          color: #fff;
          background: #111;
        }

        .status {
          color: #999;
          font-size: 11px;
          letter-spacing: 4px;
          margin-bottom: 18px;
        }

        h1 {
          font-size: clamp(28px, 7vw, 40px);
          letter-spacing: 2px;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .subtitle {
          color: #888;
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .panel {
          border: 1px solid #333;
          background: #0d0d0d;
          padding: 24px;
          text-align: left;
        }

        .panel h2 {
          font-size: 12px;
          letter-spacing: 2px;
          margin-bottom: 16px;
          color: #ddd;
        }

        .line {
          height: 1px;
          background: #292929;
          margin: 18px 0;
        }

        .info {
          font-size: 13px;
          color: #999;
          line-height: 1.8;
        }

        .notice {
          margin-top: 28px;
          font-size: 11px;
          line-height: 1.7;
          color: #777;
        }

        .footer {
          margin-top: 36px;
          font-size: 10px;
          color: #444;
          letter-spacing: 3px;
        }
      </style>
    </head>

    <body>
      <main class="container">

        <div class="logo">W</div>

        <p class="status">SECURITY SYSTEM</p>

        <h1>WEKZLEY<br>SECURITY</h1>

        <p class="subtitle">
          Sistema de análise e monitoramento
          de acessos à plataforma.
        </p>

        <section class="panel">
          <h2>ACCESS MONITOR</h2>

          <p class="info">
            Sistema operacional
          </p>

          <div class="line"></div>

          <p class="info">
            Acesso registrado automaticamente
            para fins de segurança e análise.
          </p>
        </section>

        <p class="notice">
          Aviso de privacidade: o endereço IP público
          e o horário de acesso são registrados
          automaticamente pelo servidor para análise
          de acessos. Os registros são utilizados
          para fins de segurança e não são exibidos
          nesta página.
        </p>

        <p class="footer">
          WEKZLEY SECURITY © 2026
        </p>

      </main>
    </body>
    </html>
  `);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Wekzley Security iniciado.");
});
