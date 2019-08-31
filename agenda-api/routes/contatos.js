const express = require('express');
const agendaCtrl = require('../controllers/contatosController');

const router = express.Router();

/**
 * Rota para o serviço: /agenda
 * Verbo HTTP: GET
 */
router.get('/', agendaCtrl.recuperarTodas);

/**
 * Rota para o serviço: /agenda
 * Verbo HTTP: POST
 */
router.post('/', agendaCtrl.salvar);

module.exports = router;