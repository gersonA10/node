//Se va encargar de manipualr toda la data que tenga que ver con los usuarios

//
const UserControler = require('../controllers/userControler');

module.exports = (app) =>{
    //Obtener data
    app.get('/api/users/getAll', UserControler.getAll);
}