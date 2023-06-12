import prisma from '../prismaClient.js'
// INCOMPLETO

//CREATE
const createPersonajeHabitaReino = async (req, res) => {
    const { id_personaje, id_reino, fecha_registro, es_gobernante } = req.body
    try{
		if(id_personaje==null || id_reino==null || fecha_registro==null || es_gobernante==null){
			throw new Error('Falta ingresar al menos un dato.')
		}
		const personajeHabitaReino = await prisma.personaje_habita_reino.create({
			data: {
				id_personaje,
				id_reino,
				fecha_registro: new Date(fecha_registro), 
				es_gobernante : Boolean(es_gobernante)
			}
		})
		res.json(personajeHabitaReino)
	}catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}
//READ
const getPersonajeHabitaReino = async (req , res) => {
	try{
    const personajeHabitaReino = await prisma.personaje_habita_reino.findMany()
    res.json(personajeHabitaReino)
	}catch{
		//console.log('Se produjo un error', error.message);
        res.json({ message: 'No existe el personaje en ese reino.' })
	}
}

//READ BY ID
const getPersonajeHabitaReinoByIds = async (req, res) => {
    const { id_p,id_r } = req.params
	try{
		const personaje_habita_reino = await prisma.personaje_habita_reino.findUnique({
			where:{
				id_personaje_id_reino:{
					id_personaje:Number(id_p),
					id_reino:Number(id_r),
				},
			},
		})
		if (!personaje_habita_reino) {
            throw new Error('Personaje en ese reino no existe en la base de datos.');
        }
		res.json(personaje_habita_reino)
	} catch (error) {
        console.log('Se produjo un error:', error.message);
        res.json({ message: 'No existe el personaje en ese reino.' })
    }
}

//UPDATE
const updatePersonajeHabitaReino = async (req, res) => {
    try{
		const { id_p,id_r } = req.params
		const {fecha_registro, es_gobernante} = req.body
		
		if(fecha_registro==null && es_gobernante==null){
			throw new Error('No se especifican datos para actualizar');
		}
		
		const personajeHabitaReino = await prisma.personaje_habita_reino.update({
			where:{
				id_personaje_id_reino:{
					id_personaje:Number(id_p),
					id_reino:Number(id_r),
				},
			},
			data: {
				fecha_registro, 
				es_gobernante
			},
		})
		res.json(personajeHabitaReino)
	}catch(error){
		//dice que no existe error
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}
//DELETE
const deletePersonajeHabitaReino = async (req, res) => {
	try{
		const { id_p,id_r } = req.params
		const personajeHabitaReino = await prisma.personaje_habita_reino.delete({
			where:{
				id_personaje_id_reino:{
					id_personaje:Number(id_p),
					id_reino:Number(id_r),
				},
			},
		})
		res.json(personajeHabitaReino)
	}catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}

const personajeHabitaReinoController = {
    createPersonajeHabitaReino,    
    getPersonajeHabitaReino,
	getPersonajeHabitaReinoByIds,
    updatePersonajeHabitaReino,
    deletePersonajeHabitaReino 
}

export default personajeHabitaReinoController
