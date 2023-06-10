import prisma from '../prismaClient.js'


//CREATE
//READimport prisma from '../prismaClient.js'

//CREATE
const createPersonajeConTrabajo = async (req, res) => {
	/*const { id_personaje, id_trabajo} = req.body
    const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.create({
        data: {
            id_personaje, 
			id_trabajo, 
        }
    })*/
	
    const { id_personaje, id_trabajo, fecha_inicio, fecha_termino } = req.body
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

//READ
const getPersonajeConTrabajo = async (req, res) => {
    const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.findMany()
    res.json(personaje_tiene_trabajo)
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
	const { id_personaje, id_trabajo, id_trabajo_new } = req.body
	const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.update({
	  where:{
		  id_trabajo_id_personaje:{
			  id_trabajo:Number(id_trabajo),
			  id_personaje:Number(id_personaje),
		  },
	  },
	  data: {
		id_trabajo: id_trabajo_new
	  },
	})
	
	res.json(personaje_tiene_trabajo)
}

//DELETE
const deletePersonajeConTrabajoByIdPeresonaje = async (req, res) => {
    const { id_p,id_t } = req.params
    const personaje_tiene_trabajo = await prisma.personaje_tiene_trabajo.delete({
        where: {
            id_personaje:Number(id_p)
		},
		include:{
			id_trabajo: Number(id_t)
		}
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


