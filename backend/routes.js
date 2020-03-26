const {Router} = require('express');
const routes = Router();
routes.get('/', (request, response) => {
    return response.json({
        evento: "Semana OmniStack 1.0",
        aluno: "Lucas de Oliveira Macedo"
    });
});

module.exports = routes;