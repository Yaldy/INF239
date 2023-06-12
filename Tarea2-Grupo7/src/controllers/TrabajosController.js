import prisma from '../prismaClient.js'

//CREATE
const createTrabajo = async (req, res) => {
    const { descripcion, sueldo } = req.body
	try{
		if(sueldo==null){
			throw new Error('Falta ingresar un dato.')
		}
		const trabajos = await prisma.trabajos.create({
			data: {
				descripcion,
				sueldo
			}
		})
		res.json(trabajos)
	}catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}

//READ
const getTrabajo = async (req, res) => {
	try{
		const trabajos = await prisma.trabajos.findMany()
		res.json(trabajos)
	}catch{
		//console.log('Se produjo un error', error.message);
        res.json({ message: 'No existe el trabajo.' })
	}
	
}

//READ BY ID
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
	try{
		const { id } = req.params
		const { sueldo } =  req.body
		
		if(sueldo==null){
			throw new Error('No se especifican datos para actualizar');
		}
		
		const trabajos = await prisma.trabajos.update({
		  where: {
			id: Number(id)
		  },
		  data: {
			sueldo: Number(sueldo)
		  },
		})
		
		res.json(trabajos)
	}catch(error){
		//dice que no existe error
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	
	}
}

//DELETE
const deleteTrabajoById = async (req, res) => {
	try{
		const { id } = req.params
		const trabajos = await prisma.trabajos.delete({
			where: {
				id: Number(id)
			}
		})
		
		res.json(trabajos)
	}catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}


const TrabajosController = {
   createTrabajo,
   getTrabajo,
   getTrabajoById,
   updateSueldoById,
   deleteTrabajoById
}

export default TrabajosController
