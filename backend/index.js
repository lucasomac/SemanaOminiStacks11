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