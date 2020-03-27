const {Router} = require('express');
const routes = Router();
const OngController = require("./controllers/OngController");

routes.get('/', (request, response) => {
    const params = request.query;
    return response.json({
        evento: "Semana OmniStack 1.0",
        aluno: "Lucas de Oliveira Macedo"
    });
});
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

module.exports = routes;
