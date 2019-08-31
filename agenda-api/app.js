const express = require('express');

// Middlewares
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const rotasContatos = require('./routes/contatos');

const app = express();

app.use(logger('dev'));
/**
 * Ao utilizar a função cors() sem
 * nenhum argumento, você estará
 * liberando o acesso a todos os
 * serviços para qualquer outra aplicação
 * que tenha acesso à internet.
 */
app.use(cors());

/**
 * Permite que o nosso app Express
 * consiga interpretar dados do frontend
 * em formato JSON.
 */
app.use(bodyParser.json());

/**
 * Registra as rotas relacionadas
 * a listas
 */
app.use('/contatos', rotasContatos);


module.exports = app;