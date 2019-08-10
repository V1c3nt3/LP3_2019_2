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
    //recupera a variavel de     url parametro
    let str = req.params.str;
    //fazer saravá em js para inverter
    //string para vetor, use function reverse , transf vetor to string com função join()
    str = str.split('').reverse().join('');
    res.json({ resultado: str});//refatorado aula2 para boas praticas
});

app.use('/cpf/:cpf', (req, res) => {
    let cpf = req.params.cpf;
        var soma; 
        var resto;
        soma = 0;
        if (cpf == "00000000000") return res.json({valido : false});//caso entrada seja nula
        for(i=1; i <= 9; i++){
            //alg. mais atualizado de validação de cpf
            soma = soma + parseInt(cpf.substring(i-1, i))*(11-i);
        }
        //console.log(soma);
        resto = (soma*10)%11;
        if((resto == 10) || (resto ==11)) resto = 0;
        //caso o valor de resto seja diferente do 1º dig. verif. cpf invalido e encerra
        if(resto != parseInt(cpf.substring(9, 10))) return res.json({valido : false});
        soma=0;
        //proximo laço verifica o 2º dig. verif.
        for(i=1;i<=10;i++){
            soma = soma + parseInt(cpf.substring(i-1, i))*(12-i);
        }
        resto = (soma*10)%11;
        if((resto==10)||(resto==11)) resto= 0;
        //caso seja dif. retorna false
        if(resto!=parseInt(cpf.substring(10,11)))return res.json({valido : false});
        //caso seja verdadeiro == cpf valido!
        return res.json({valido : true});//mudou de res.send para inserir nos casos de testegit 
});

//para testar não podemos rodar o servidor em testes
//exporta a constante do server
module.exports = app;