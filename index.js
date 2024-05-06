const express = require('express')
const app = express()

const porta = 5000 //porta
app.listen(porta, () => {
    console.log("Servidor rodando na porta " + porta);
})


// Crie uma rota GET /health que retorne um JSON: {"status": "running"}
app.get('/health', (req, res) => {
    res.json({"status": "running"});
});

