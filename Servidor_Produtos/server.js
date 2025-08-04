// importa o Express para uso de suas funcionalidades
const express = require("express");

// criada instancia do Express que representa um app web
const server = express();
const port = 80;

// criação de servidor, FICA NA ULTIMA LINHA
server.listen(port, ()=>{
    console.log("Servidor de produtos iniciado e rodando na porta 80! ")
});