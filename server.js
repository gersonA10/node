const express = require('express');
const app = express();
const users = require('./routes/userRoutes');


//Middleware
app.use(express.json());


users(app);

// app.get('/', (req, res)=> {
//     res.send('Hola mundo');
// });

// app.post('/mensaje', (req, res) => {
//     const {mensaje} = req.body;
//     res.send(`Mensaje recibido: ${mensaje}`)
// });

// app.put('/actualizar/:id', (req,res) => {

//     const { id } = req.params;
//     const { mensaje } = req.body;
//     res.send(`Mensajecon id ${id} actualizado al: ${mensaje}`);
// });

// app.delete('/eliminar/:id', (req, res)=>{
//     const { id } = req.params;
//     res.send(`Mensaje con id ${id} eliminado correctamente`);
// })


const port = 3000;


app.listen(port, ()=> {
    console.log('Servidor levantado correctamente');
});


