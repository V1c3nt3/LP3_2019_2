const http = require('http');//importando dependencia http para server

const hostname = '127.0.0.1';
const port = 3000;//porta padrão de acesso node

const server = http.createServer((req, res) =>{
    res.statusCode = 200;//codigo de resposta padrão do http para OK
    res.setHeader('Content-Type','text/plain');//indica o tipo de dado retornado na resposta
    res.end('Fala, negada!');
});

server.listen(port, hostname, () => console.log('Servidor iniciado'));//inicializa o servidor e cria uma função de resposta

//depois de iniciado o servidor é possivel o acesso no navegador pela porta configurada "localhost:3000"