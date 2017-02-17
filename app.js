// importa as configurações do servidor
var app = require('./config/server');

// parametriza a porta que irá receber requisições
var server = app.listen(80, function(){
    console.log('Servidor ON');
});

// integra o socket.io ao servidor
var io = require('socket.io').listen(server);
app.set('io', io);

// criar a conexão por websocket
io.on('connection', function(socket){
    console.log('usuario on')

    socket.on('disconnect', function(){
        console.log('usuario off')
    });

    socket.on('msgParaServidor', function(data){
        socket.emit(
            'msgParaCliente',
            {nome: data.nome, mensagem: data.mensagem}
        );

        socket.broadcast.emit(
            'msgParaCliente',
            {nome: data.nome, mensagem: data.mensagem}
        );
    });
});
