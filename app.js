// importa as configurações do servidor
var app = require('./config/server');

// parametriza a porta que irá receber requisições
var server = app.listen(80, function(){
    console.log('Servidor ON');
});

// integra socket.io ao servidor 
require('socket.io').listen(server);
