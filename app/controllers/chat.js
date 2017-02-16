module.exports.iniciaChat = function(application, req, res){

    var dadosForm = req.body;

    req.assert('nome', 'Nome é obrigatório').notEmpty();
    req.assert('nome', 'Nome deve conter entre 3 e 20 caracteres').len(3,15);

    var erros = req.validationErrors();

    if (erros) {
        res.render("index", {validacao: erros});
        return;
    }

    res.render("chat");
}
