class LivroDAO {

    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve,reject)=> {
            this._db.all(
                'SELECT * FROM livros',
                (erro,resultados) => {
                if(erro) return reject('Não foi possível listar os livros.!');
                return resolve(resultados);
            }
            
            )

        })
        
    }
    /* Com callback:
        lista(callback) {
        this._db.all(
            'SELECT * FROM livros',
            (erro,resultados) => callback(erro, resultados)
        )
    } */
    
}

module.exports = LivroDAO;