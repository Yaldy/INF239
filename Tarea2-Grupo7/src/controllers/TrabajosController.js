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
const getTrabajo = async (req, res) => {
    const trabajos = await prisma.trabajos.findUnique
    res.json(trabajos)
}

const getTrabajoById = async (req, res) => {
    const { id } = req.params
    try {
        const trabajos = await prisma.trabajos.findUnique({
            where: {
                id: Number(id)
            }
        })
		if (!trabajos) {
            throw new Error('Trabajo no existe en la base de datos.');
        }
        res.json(trabajos)
    } catch (error) {
        console.log('Se produjo un error:', error.message);
        res.json({ message: 'No existe Trabajo.' })
    }

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

//DELETE
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
   getTrabajo,
   getTrabajoById,
   updateSueldoById,
   deleteTrabajoById
}

export default TrabajosController
