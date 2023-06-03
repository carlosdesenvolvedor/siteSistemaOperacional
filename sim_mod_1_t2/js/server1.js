// Importar o módulo express e fs
const express = require('express');
const fs = require('fs');

// Definir o host e a porta do servidor
const hostname = '127.0.0.1';
const port = 3000;

// Criar o servidor com o método express
const app = express();

// Definir o caminho para o arquivo estático HTML

app.use(express.static(__dirname + '/git/sim_mod_1_t2/index.html'));

// Iniciar o servidor com o método listen
app.listen(port, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
