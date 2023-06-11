import express from 'express';
import UsersController from './controllers/UsersController.js';
import morgan from 'morgan';

import API_Controller from './controllers/API_Controller.js';

import PersonajesController from './controllers/personajesController.js';
import kartsController from './controllers/kartsController.js';
import reinosController from './controllers/reinosController.js';

import TrabajosController from './controllers/TrabajosController.js';
import Personaje_tiene_Trabajo_Controller from './controllers/Personaje_tiene_Trabajo_Controller.js';
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

app.post('/personaje', PersonajesController.createPersonaje)
app.get('/personaje/:id', PersonajesController.getPersonajeById)
app.get('/personaje', PersonajesController.getPersonajes)
app.put('/personaje/:id', PersonajesController.updatePersonaje)
app.delete('/personaje/:id', PersonajesController.deletePersonaje)

//============================Karts==============================//

app.get('/karts', kartsController.getKarts)
app.get('/karts/:id', kartsController.getKartsById)
app.post('/karts', kartsController.createKart)
app.put('/karts/:id', kartsController.updateKart)
app.delete('/karts/:id', kartsController.deleteKart)

//===============================Trabajos======================

app.post('/trabajos', TrabajosController.createTrabajo)
app.get('/trabajos', TrabajosController.getTrabajo)
app.get('/trabajos/:id', TrabajosController.getTrabajoById)
app.put('/trabajos/:id', TrabajosController.updateSueldoById)
app.delete('/trabajos/:id', TrabajosController.deleteTrabajoById)

//==============================Reinos============================//

app.get('/reinos', reinosController.getReinos)
app.get('/reinos/:id', reinosController.getReinosById)
app.post('/reinos', reinosController.createReino)
app.put('/reinos/:id', reinosController.updateReino)
app.delete('/reinos/:id', reinosController.deleteReino)

//=====================Personaje Tiene Trabajos======================

app.post('/personajetienetrabajo', Personaje_tiene_Trabajo_Controller.createPersonajeConTrabajo)
app.get('/personajetienetrabajo', Personaje_tiene_Trabajo_Controller.getPersonajeConTrabajo)
app.get('/personajetienetrabajo/:id_p/:id_t', Personaje_tiene_Trabajo_Controller.getPersonajeConTrabajoByIds)
app.put('/personajetienetrabajo/:id_p/:id_t', Personaje_tiene_Trabajo_Controller.updateTrabajoByIdPersonaje)
app.delete('/personajetienetrabajo/:id_p/:id_t', Personaje_tiene_Trabajo_Controller.deletePersonajeConTrabajoByIdPeresonaje)

//=======================APIs===================================//

app.get('/api/top5personajesConMasFuerza', API_Controller.top5personajesConMasFuerza)
app.get('/api/personajeConMasKarts', API_Controller.personajeConMasKarts)

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
