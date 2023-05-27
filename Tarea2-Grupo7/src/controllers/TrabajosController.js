import prisma from '../prismaClient.js'

//CREATE
const createTrabajo = async (req, res) => {
    const { descripcion, sueldo } = req.body
    const trabajos = await prisma.trabajos.create({
        data: {
            descripcion,
            sueldo
        }
    })
    res.json(trabajos)
}

//READ
const getTrabajoById = async (req, res) => {
    const { id } = req.params
    const trabajos = await prisma.trabajos.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(trabajos)
}

//UPDATE
const updateSueldoById = async (req, res) => {
	const { id, sueldo } = req.params
	const trabajos = await prisma.trabajos.update({
	  where: {
		id: Number(id)
	  },
	  data: {
		sueldo: Number(sueldo)
	  },
	})
	
	res.json(trabajos)
}

const deleteTrabajoById = async (req, res) => {
    const { id } = req.params
    const trabajos = await prisma.trabajos.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(trabajos)
}


const TrabajosController = {
   createTrabajo,
   getTrabajoById,
   updateSueldoById,
   deleteTrabajoById
}

export default TrabajosController