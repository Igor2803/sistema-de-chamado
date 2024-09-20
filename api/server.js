const express = require('express');
const app = express();
const port = 3001;

const cors = require('cors');
app.use(cors());

// Middleware para permitir o uso de JSON
app.use(express.json());

// Rota para retornar o objeto JSON
app.get('/info', (req, res) => {
    // Aqui você pode gerar ou buscar os dados conforme necessário
    const responseObject = [
        {
            id: 1,
            data: '2024-09-05',
            periodo: '2024-09-01 a 2024-09-30',
            payload: {
                key: 'lendo' // Exemplo de payload
            },
            observacao: 'Este é um exemplo de observação.'
        },
        {
            id: 2,
            data: '2024-09-07',
            periodo: '2024-09-02 a 2024-09-29',
            payload: {
                key: 'ola' // Exemplo de payload
            },
            observacao: 'Este é um exemplo de observação Eliabe'
        },
        {
            id: 3,
            data: '2024-09-08',
            periodo: '2024-09-03 a 2024-09-29',
            payload: {
                key: 'ola' // Exemplo de payload
            },
            observacao: 'ELIABE OTARIO'
        }
    ];

    res.json(responseObject);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
