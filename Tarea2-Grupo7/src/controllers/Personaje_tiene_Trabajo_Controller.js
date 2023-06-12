import prisma from '../prismaClient.js'


//CREATE
const createPersonajeConTrabajo = async (req, res) => {
	const { id_personaje, id_trabajo, fecha_inicio, fecha_termino } = req.body
    try{
		if(id_personaje==null || id_trabajo==null || fecha_inicio==null){
			throw new Error('Falta ingresar un dato.')
		}
		/*if((`id_personaje`,`id_trabajo`)){
			throw new Error('Ya está ingresada esta tupla personaje-trabajo')
		}*/
		const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.create({
			data: {
				id_personaje, 
				id_trabajo, 
				fecha_inicio: new Date(fecha_inicio), 
				fecha_termino: new Date(fecha_termino)
			}
		})
		
		res.json(personaje_tiene_trabajo)
	}
	catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}

//READ
const getPersonajeConTrabajo = async (req, res) => {
    try{
		const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.findMany()
		res.json(personaje_tiene_trabajo)
	}
	catch{
		//console.log('Se produjo un error', error.message);
        res.json({ message: 'No existe el personaje con ese trabajo.' })
	}
}


//READ BY ID
const getPersonajeConTrabajoByIds = async (req, res) => {
    const { id_p,id_t } = req.params
	try{
		const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.findUnique({
			where:{
				id_personaje_id_trabajo:{
					id_personaje:Number(id_p),
					id_trabajo:Number(id_t),
				},
			},
		})
		if (!personaje_tiene_trabajo) {
            throw new Error('Personaje con ese trabajo no existe en la base de datos.');
        }
		res.json(personaje_tiene_trabajo)
	} catch (error) {
        console.log('Se produjo un error:', error.message);
        res.json({ message: 'No existe el personaje con ese trabajo.' })
    }
}

//UPDATE
//CAMBIAR APP

const updateTrabajoByIdPersonaje = async (req, res) => {
	
	try{
		const {id_p, id_t} = req.params
		const {fecha_inicio,fecha_termino} = req.body
		
		const fecha_i=new Date(fecha_inicio)
		const fecha_t=new Date(fecha_termino)
		if(!isNaN(fecha_i) && !isNaN(fecha_t)){
			const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.update({
				where:{
					id_personaje_id_trabajo:{
						id_personaje:Number(id_p),
						id_trabajo:Number(id_t),
					},
				},
				data:{
					fecha_inicio: fecha_i,
					fecha_termino: fecha_t,
				},
			})
			res.json(personaje_tiene_trabajo)
		}
		else if(!isNaN(fecha_i) && isNaN(fecha_t)){
			const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.update({
				where:{
					id_personaje_id_trabajo:{
						id_personaje:Number(id_p),
						id_trabajo:Number(id_t),
					},
				},
				data: {
					fecha_inicio: fecha_i,
				},
			})
			res.json(personaje_tiene_trabajo)
		}
		else if(isNaN(fecha_i) && !isNaN(fecha_t)){
			const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.update({
				where:{
					id_personaje_id_trabajo:{
						id_personaje:Number(id_p),
						id_trabajo:Number(id_t),
					},
				},
				data: {
					fecha_termino: fecha_t
				},
			})
			res.json(personaje_tiene_trabajo)
		}
		else{
			throw new Error('No se especifican datos para actualizar');
		}
		
		
	}catch(error){
		//dice que no existe error
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	
	}
	
}

//DELETE
const deletePersonajeConTrabajoByIdPeresonaje = async (req, res) => {
    
	try{
		const { id_p,id_t } = req.params
		
		const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.delete({
			where:{
				id_personaje_id_trabajo:{
					id_personaje:Number(id_p),
					id_trabajo:Number(id_t),
				},
			},
		})
		res.json(personaje_tiene_trabajo)
	}
	catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
    
    
}


const Personaje_tiene_Trabajo_Controller = {
   createPersonajeConTrabajo,
   getPersonajeConTrabajo,
   getPersonajeConTrabajoByIds,
   updateTrabajoByIdPersonaje,
   deletePersonajeConTrabajoByIdPeresonaje
}

export default Personaje_tiene_Trabajo_Controller


