// importar o módulo do framework express
var express = require('express');

// importar o módulo do consign
var consign = require('consign');

// importar o módulo body-parser
var bodyParser = require('body-parser');

// importar o módulo do express-validator
var expressValidator = require('express-validator');

// iniciar o objeto do express
var app = express();

// setar as variáveis 'view-engine' e 'views' do express
app.set('view-engine', 'ejs');
app.set('view', './app/views');

// configurar o middleware express.static
app.use(express.static('./public'));

// configurar o middleware body-parser
app.use(bodyParser.urlencoded({extended: true}));

// configurar o middleware express-validator
app.use(expressValidator());

// configurar o auto load das rotas, dos models e dos controllers para o objeto app com consign
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

// exportar o objeto app
module.exports = app