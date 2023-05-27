import express from 'express';
import UsersController from './controllers/UsersController.js';
import morgan from 'morgan';

import PersonajesController from './controllers/personajesController.js';
import KartsController from './controllers/kartsController.js';


import TrabajosController from './controllers/TrabajosController.js';

const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//endpoints(Routes)
app.get('/users', UsersController.getUsers)
app.get('/users/:id', UsersController.getUserById)
app.post('/users', UsersController.createUser)
app.get('/users/:id/posts', UsersController.usersPosts)

app.get('/hola', (req, res) => {
		//res.status(200);
		res.json('Hola');
	}
)

//=========================Personajes=================================//

app.post('/personaje', personajesController.createPersonaje)
app.get('/personaje', personajesController.getPersonajes)
app.put('/personaje/:id', personajesController.updatePersonaje)
app.delete('/personaje/:id', personajesController.deletePersonaje)

//============================Karts==============================//

app.get('/kart', kartsController.getKarts)
app.post('/kart', kartsController.createKart)

//===============================Trabajos======================

app.post('/trabajos', TrabajosController.createTrabajo)
app.get('/trabajos/:id', TrabajosController.getTrabajoById)
app.put('/trabajos/:id/:sueldo', TrabajosController.updateSueldoById)
app.delete('/trabajos/:id', TrabajosController.deleteTrabajoById)

//==========================================================//
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!!' });
})
//==========================================================//


// 404 not found route
app.use((_, res) => {
    res.status(404).json({ message: 'Not found Crack!' });
})


//Init server
app.listen(3000, () => {
    console.log(`Server running on port ${ENV.API_PORT}`);
})
