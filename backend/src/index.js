const express = require('express');
const cors = require('cors');
const routes = require('./routes.js');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(process.env.SERVER_PORT);

/**
 *Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) --> request.query
 * Route Params: Parâmentros utilizados para identificar recursos EX: /users/:1 --> request.params
 * Request Body: Corpo da equisição, utlizado para criar ou alterar recursos --> request.body
 **/

/**
 * Entidades:
 *      Ong
 *      Casos (Incident)
 * Funcionalidades
 *      Login de Ong
 *      Logout de Ong
 *      Cadastro de Ong
 *      Cadastro de Caso
 *      Deletar caso
 *      Listar casos específicos de uma ONG
 *      Listar todos os casos
 *      Entrar em contato com a Ong
 */
