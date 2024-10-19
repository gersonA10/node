
const User = require('../models/user');
// getAll(){
//     //cevovler todos los productos que se trgna en la base de datos
// }

module.exports = {
    async getAll(req, res, next){
        try {
            const data = await User.getAll();
            console.log(`Usuarios: ${data}`);
            return res.status(201).json(data);
        } catch (error) {
            return res.status(501).json({
                succes: false,
                messaje: 'Error al obtener los usuarios de la base de datos'
            })
        }
    }
}