const { response } = require('express');
const express = require('express');

const app = express();

/**
 *  Query Params: Vamos usar principalmente para filtros e paginação
 *  Route Params: Identificar recursos na hora de atualizar ou deletar
 *  Request Params:
 *  
 */


app.get('/projects', (request, response) => {
    const { title, owner } = request.query;

    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 100'
    ])
});

app.post('/projects', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'
    ])
})

app.put('/projects/:id', (request, response) => {
    const params = request.params;

    console.log(params)

    return response.json([
        'Projeto 50',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5'
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 50',
        'Projeto 2',
    ]);
});

app.listen(3333);