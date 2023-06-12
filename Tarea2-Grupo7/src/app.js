import express from 'express';
import morgan from 'morgan';

import API_Controller from './controllers/API_Controller.js';

import PersonajesController from './controllers/personajesController.js';
import kartsController from './controllers/kartsController.js';
import reinosController from './controllers/reinosController.js';
import TrabajosController from './controllers/TrabajosController.js';
import Personaje_tiene_Trabajo_Controller from './controllers/Personaje_tiene_Trabajo_Controller.js';
import personajeHabitaReinoController from './controllers/personaje_habita_reinoController.js'
import DefensasController from './controllers/DefensasController.js'
import DiplomaciasController from './controllers/DiplomaciasController.js'
import Defensa_pertenece_reinoController from './controllers/Defensa_pertenece_reinoController.js'


const ENV = process.env;
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

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
app.delete('/personajetienetrabajo/:id_p/:id_t', Personaje_tiene_Trabajo_Controller.deletePersonajeConTrabajoById)

//=====================Personaje habita Reino======================

app.post('/personajehabitareino', personajeHabitaReinoController.createPersonajeHabitaReino)
app.get('/personajehabitareino', personajeHabitaReinoController.getPersonajeHabitaReino)
app.get('/personajehabitareino/:id_p/:id_r', personajeHabitaReinoController.getPersonajeHabitaReinoByIds)
app.put('/personajehabitareino/:id_p/:id_r', personajeHabitaReinoController.updatePersonajeHabitaReino)
app.delete('/personajehabitareino/:id_p/:id_r', personajeHabitaReinoController.deletePersonajeHabitaReino)

//===============================Defensas======================

app.post('/defensas', DefensasController.createDefensa)
app.get('/defensas', DefensasController.getDefensa)
app.get('/defensas/:id', DefensasController.getDefensaById)
app.put('/defensas/:id', DefensasController.updateDefensaById)
app.delete('/defensas/:id', DefensasController.deleteDefensaById)

//=====================Diplomacias======================

app.post('/diplomacias', DiplomaciasController.createDiplomacias)
app.get('/diplomacias', DiplomaciasController.getDiplomacias)
app.get('/diplomacias/:id_r1/:id_r2', DiplomaciasController.getDiplomaciasByIds)
app.put('/diplomacias/:id_r1/:id_r2', DiplomaciasController.updateDiplomacias)
app.delete('/diplomacias/:id_r1/:id_r2', DiplomaciasController.deleteDiplomacias)

//=====================Defensa pertenece Reino======================

app.post('/defensapertenecereino', Defensa_pertenece_reinoController.createDefensa_pertenece_reino)
app.get('/defensapertenecereino', Defensa_pertenece_reinoController.getDefensa_pertenece_reino)
app.get('/defensapertenecereino/:id_d/:id_r', Defensa_pertenece_reinoController.getDefensa_pertenece_reinoByIds)
app.delete('/defensapertenecereino/:id_d/:id_r', Defensa_pertenece_reinoController.deleteDefensa_pertenece_reino)

//=======================APIs===================================//

app.get('/api/top5personajesConMasFuerza', API_Controller.top5personajesConMasFuerza)
app.get('/api/personajeConMasKarts', API_Controller.personajeConMasKarts)
app.get('/api/cantidadHabitantes/:id', API_Controller.cantidadHabitantes)
app.get('/api/gobernante/', API_Controller.gobernante)
app.get('/api/gobernante/:id', API_Controller.gobernanteByID)

//==========================================================//


// 404 not found route
app.use((_, res) => {
    res.status(404).json({ message: 'Not found Crack!' });
})


//Init server
app.listen(3000, () => {
    console.log(`Server running on port ${ENV.API_PORT}`);
})
