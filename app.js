// importa as configurações do servidor
var app = require('./config/server');

// parametrizar a porta que irá receber requisições
app.listen(80, function(){
    console.log('Servidor ON');
});
