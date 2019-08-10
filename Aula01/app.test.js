const requisicao = require('supertest');
const app = require('./app');//importa a configuração da aplicação em teste
//criar o primeiro teste, no caso de inversor de string do app.js
describe('Testa o serviço de inversão de strings', () => {
    //semantica de inserção de teste
    test('Deve retornar a string original de forma invertida', async()=>{
        let str = 'animal';
        /**
         * Realiza uma requisição ao serviço de inversão de string
         * passando a palavra "animal" como parâmetro.
         * A resposta do serviço (HttpResponse) será armazenada na variavel "resposta".
         */
        let resposta = await requisicao(app).get(`/inverter/${str}`);
        //let resultado = resposta.body.resultado;//body representa o corpo da resposta 1ª forma
        let { resultado } = resposta.body;//2ª forma e mais usual
        expect(resultado).toBe('lamina');//resultado esperado

        str = 'b';
        resposta = await requisicao(app).get(`/inverter/${str}`);
        ({resultado} = resposta.body);
        expect(resultado).toBe('b');

        str = 'Vicente';
        resposta = await requisicao(app).get(`/inverter/${str}`);
        ({resultado} = resposta.body);
        expect(resultado).toBe('etneciV');
    });
});

describe('Testa o serviço de validação de CPFs', () =>{
    test('Caso o CPF seja válido retorna true', async() =>{
        const cpfsValidos = ['70772620229', '68782770433', '62681583420',
                            '83937561897', '40624284239', '20723373302'];
        for(let i=0; i<cpfsValidos.length; i++){
            let resposta = await requisicao(app).get(`/cpf/${cpfsValidos[i]}`);
            //let abobora = resposta.body.valido;
            let {valido} = resposta.body;
            expect(valido).toBe(true);
        }
    });

    test('Caso o CPF seja inválido retorna false', async() =>{
        const cpfsInvalidos = ['70772620228', '68782770438', '62681583425',
                            '83937561898', '7865', '00000000000'];
        for(let i=0; i<cpfsInvalidos.length; i++){
            let resposta = await requisicao(app).get(`/cpf/${cpfsInvalidos[i]}`);
            //let abobora = resposta.body.valido;
            let {valido} = resposta.body;
            expect(valido).toBe(false);
        }
    });
});


    