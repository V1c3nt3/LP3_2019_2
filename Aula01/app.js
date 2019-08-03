//npm i -g nodemon permite o hot deploy -g global atualiza automatico o codigo alterado
//web services do tipo REST

const express = require('express');
const app = express();

app.use('/data', (req, res) => {
    let dataAtual = new Date();
    dataAtual = dataAtual.toLocaleDateString();//formata um pouco o json
    res.json(dataAtual);
});

app.use('/inverter/:str', (req, res) => {//: depois da barra indica a variavel a ser alterada
    //recupera a variavel de url parametro
    let str = req.params.str;
    //fazer saravá em js para inverter
    //string para vetor, use function reverse , transf vetor to string com função join()
    str = str.split('').reverse().join('');
    res.json(str);
});

app.use('/cpf/:cpf', (req, res) => {
    let cpf = req.params.cpf;
    //retornar true se o cpf valido ou false senao
    res.send('Validador de CPF');
});

app.listen(3000, console.log('Servidor iniciado'));