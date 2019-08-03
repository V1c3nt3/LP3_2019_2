//importar express 'npm i --save express' registra a dependencia no package.json
//alterar arquivo principal np package.json
//"scripts": {"start": "node app.js","test": "echo \"Error: no test specified\" && exit 1"},  inserir no package.jon

const express = require('express');

//constant que controla nosso app
const app = express();

app.use('/', (req, res) => res.send('Fala negada!'));//barra sig raiz

app.listen(3000, () => console.log('Servidor Iniciado'));