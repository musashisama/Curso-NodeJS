const LivroControlador = require('../controladores/livro-controlador');
const livrocontrolador = new LivroControlador();

Livro = require('../modelos/livros');

module.exports = (app) => {    
    const rotasLivro = LivroControlador.rotas();  
        
    app.get(rotasLivro.lista, livrocontrolador.lista());

    app.route(rotasLivro.cadastro)
        .get(livrocontrolador.formularioCadastro())
        .post(Livro.validacoes(), livrocontrolador.cadastra())
        .put(livrocontrolador.edita());   

    app.get(rotasLivro.edicao, livrocontrolador.formularioEdicao());  

    app.delete(rotasLivro.delecao, livrocontrolador.remove());
};