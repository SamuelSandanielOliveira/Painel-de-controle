const express = require("express");
const mysql = require("mysql2");
const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "senha",
  database: "olho_abismo"
});

// Painel
app.get("/painel", (req, res) => {
  db.query("SELECT * FROM painel ORDER BY data DESC", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/painel", (req, res) => {
  const { autor, mensagem } = req.body;
  db.query("INSERT INTO painel (autor, mensagem) VALUES (?, ?)", [autor, mensagem], (err) => {
    if (err) throw err;
    res.json({ message: "Mensagem registrada!" });
  });
});

// Recursos
app.get("/recursos", (req, res) => {
  db.query("SELECT * FROM recursos", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post("/recursos/adicionar", (req, res) => {
  const { tipo, quantidade } = req.body;
  db.query("UPDATE recursos SET atual = atual + ? WHERE tipo = ?", [quantidade, tipo], (err) => {
    if (err) throw err;
    res.json({ message: "Recurso atualizado!" });
  });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
