import { createServer } from 'node:http'

const server = createServer((request,response)=>{
  response.write('oi mundo')

  return response.end()
})

server.listen(3333)



 







/*
// importa o modulo express
const express = require('express');

//cria uma instancia do aplicativo express
const app = express();

//define a porta do servidor
const port = 3000;


// Configura o middleware para servir arquivos estáticos
// express.static('public') indica que todos os arquivos dentro da pasta 'public'
// estarão disponíveis para o navegador.
app.use(express.static('public'));

// Inicia o servidor e escuta na porta definida
app.listen(port, () => {
  // Uma mensagem no console para saber que o servidor está funcionando
  console.log(`Servidor rodando em http://localhost:${port}`);
});*/