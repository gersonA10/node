//Se va encargar de manipualr toda la data que tenga que ver con los usuarios

//
const UserControler = require('../controllers/userControler');

module.exports = (app) =>{
    //Obtener data
    app.get('/api/users/getAll', UserControler.getAll);
    app.get('/api/users/find/:id', UserControler.findUserById);

    // Posts
    app.post('/api/users/create', UserControler.create);

    //Delete
    app.delete('/api/users/delete/:id', UserControler.deleteUserById)
    
    // /Update
    app.put('/api/users/update/:id', UserControler.update);
    

}

