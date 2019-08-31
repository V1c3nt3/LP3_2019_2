const Contato = require('../models/contato');

let agenda = [];

const controller = {
    // Arrow function
    
    salvar: (req, res) => {
            let name = new Contato(nome);
            agenda.push(name);
            res.status(201).json(name);

            
            const tel = new Contato(telefone);
            agenda.push(tel);
            res.status(201).json(tel);

            
            let email = new Contato(email);
            agenda.push(email);
            res.status(201).json(email);

            
            let idade = new Contato(idade);
            agenda.push(idade);
            res.status(201).json(idade);
        },
        recuperarTodas: (req, res) => res.json(agenda)
    }


module.exports = controller;