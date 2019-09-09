const BaseControlador = require('../controladores/base-controlador');
const basecontrolador = new BaseControlador();

module.exports = (app) => {
    const rotasBase = BaseControlador.rotas();    
    app.get(rotasBase.home, basecontrolador.home());    
};