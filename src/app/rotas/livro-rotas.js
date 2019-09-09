const LivroControlador = require('../controladores/livro-controlador');
const livrocontrolador = new LivroControlador();

Livro = require('../modelos/livros');

const BaseControlador = require('../controladores/base-controlador');

module.exports = (app) => {    
    const rotasLivro = LivroControlador.rotas();  
        
    app.use(rotasLivro.autenticadas, function(req,resp, next){
        if(req.isAuthenticated()){
            next();
        } else {
            resp.redirect(BaseControlador.rotas().login);
        }
    });

    app.get(rotasLivro.lista, livrocontrolador.lista());

    app.route(rotasLivro.cadastro)
        .get(livrocontrolador.formularioCadastro())
        .post(Livro.validacoes(), livrocontrolador.cadastra())
        .put(livrocontrolador.edita());   

    app.get(rotasLivro.edicao, livrocontrolador.formularioEdicao());  

    app.delete(rotasLivro.delecao, livrocontrolador.remove());
};