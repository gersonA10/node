
const User = require('../models/user');

module.exports = {
     async getAll(req, res, next){
       try {
           const data = await User.getAll();
           console.log(`Usuarios: ${data}`);
           return res.status(201).json(data);
       }
       catch (error) {
           console.log(`Error: ${error}`);
           return res.status(500).json({
               success: false,
               message: 'Error al obtener los usuarios'
           });
       }
   },

   async create(req, res, next) {
    try {
        const {name, email, phone, address} = req.body;
        const newUser = await User.create({name, email, phone, address});
        console.log(`Usuario creado: ${newUser}`);
        return res.status(201).json({
            success: 'true',
            message: 'Usuario creado exitosamente',
            data: newUser
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Error al crear un usuario'
        })
    }
   },

   async deleteUserById(req, res, next){
    try {
        const {id} = req.params;
        const deleteUser = await User.delete(id);

        if (deleteUser) {
            console.log('Usuario eliminado');
            return res.status(200).json({
                success: true,
                message: 'Usuario eliminado exitosamente',
                data: deleteUser
            });
        } else {
            return res.status(401).json({
                success: false,
                message: 'Usuario no econtrado'
            });
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Error al eliminar un usuario'
        })
    }
   },

   async update(req, res, next){
    try {
        const {id} = req.params;
        const {name, email, phone, address} = req.body;
        const updatedUser = await User.update(id, {name, email, phone, address});

        if (updatedUser) {
            console.log(`Usuario actualizado : ${updatedUser}`);
            return res.status(200).json({
                success: true,
                message: 'Usuario actualizado exitosamente',
                data: updatedUser
            });
        } else {
            return res.status(404).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }
    } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(500).json({
            success: false,
            message: 'Error al actualizar el usuario'
        });
    }
   },

   async findUserById(req, res, next){
    try {
        const {id} = req.params;
        const user = User.findUserById(id);

        if (user) {
            return res.status(200).json({
                success: true,
                message: "Usuario encontrado correctamente",
                data: user
            });
        } else {
            return res.status(401).json({
                success: false,
                message: "Usuario no encontrado"
            });
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error al buscar el usuario en la base de datos"
        });
    }
   }
}