const {Router} = require('express');
const routes = Router();
routes.get('/', (request, response) => {
    const params = request.query;
    return response.json({
        evento: "Semana OmniStack 1.0",
        aluno: "Lucas de Oliveira Macedo"
    });
});
routes.get('/users', (request, response) => {
    const params = request.query;
    return response.json({
        evento: "Semana OmniStack 1.0",
        aluno: "Lucas de Oliveira Macedo"
    });
});

module.exports = routes;
