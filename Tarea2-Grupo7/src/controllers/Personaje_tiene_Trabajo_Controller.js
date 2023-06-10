import prisma from '../prismaClient.js'


//CREATE
//READimport prisma from '../prismaClient.js'

//CREATE
const createPersonajeConTrabajo = async (req, res) => {
	const { id_personaje, id_trabajo, fecha_inicio, fecha_termino } = req.body
    try{
		if(id_personaje==null || id_trabajo==null || fecha_inicio==null){
			throw new Error('Falta ingresar un dato.')
		}
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
        res.status(400).json({ message: 'Falta ingresar un dato.' })
	}
}

//READ
const getPersonajeConTrabajo = async (req, res) => {
    try{
		const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.findMany()
		res.json(personaje_tiene_trabajo)
	}
	catch{
		console.log('Se produjo un error', error.message);
        res.json({ message: 'No existe el personaje.' })
	}
}

const getPersonajeConTrabajoByIdPersonaje = async (req, res) => {
    const { id } = req.params
    const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.findMany({
        where: {
            id_personaje: Number(id)
        }
    })
    res.json(personaje_tiene_trabajo)
}

//UPDATE

const updateTrabajoByIdPersonaje = async (req, res) => {
	const { id_personaje,id_trabajo } = req.params
	const { fecha_inicio,fecha_termino } = req.body
	
	
	const fecha=new Date(fecha_termino)
	const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.update({
		where:{
			id_personaje_id_trabajo:{
				id_personaje:Number(id_personaje),
				id_trabajo:Number(id_trabajo),
			},
		},
		data: {
			fecha_termino: fecha
		},
	});
	
	res.json(personaje_tiene_trabajo)
}

//DELETE
const deletePersonajeConTrabajoByIdPeresonaje = async (req, res) => {
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


const Personaje_tiene_Trabajo_Controller = {
   createPersonajeConTrabajo,
   getPersonajeConTrabajo,
   getPersonajeConTrabajoByIdPersonaje,
   updateTrabajoByIdPersonaje,
   deletePersonajeConTrabajoByIdPeresonaje
}

export default Personaje_tiene_Trabajo_Controller


