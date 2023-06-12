import prisma from '../prismaClient.js'


//CREATE
const createReino = async (req, res) => {
    const { nombre, ubicacion, superficie } = req.body
    try{
		if(nombre==null || ubicacion==null || superficie==null){
			throw new Error('Falta ingresar al menos un dato.')
		}
		const reino = await prisma.reinos.create({
			data: {
				nombre, 
				ubicacion,
				superficie
			}
		})
		res.json(reino)
	}catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}

//READ
const getReinos = async (req , res) => {
	try{
		const reino = await prisma.reinos.findMany()
		res.json(reino)
	}catch{
		//console.log('Se produjo un error', error.message);
        res.json({ message: 'No existe el reino.' })
	}
}
//READ BY ID
const getReinosById = async (req, res) => {
   const { id } = req.params
    try {
        const reino = await prisma.reinos.findUnique({
            where: {
                id: Number(id)
            }
        })
		if (!reino) {
            throw new Error('Reino no existe en la base de datos.');
        }
        res.json(reino)
    } catch (error) {
        console.log('Se produjo un error:', error.message);
        res.json({ message: 'No existe Reino.' })
    }
}	
//UPDATE
const updateReino = async (req, res) => {
	try{
		const { id } = req.params
		const {nombre, ubicacion, superficie} = req.body
		
		if(nombre==null && ubicacion==null && superficie==null){
			throw new Error('No se especifican datos para actualizar');
		}
		
		const reino = await prisma.reinos.update({
			where: {
				id : Number(id)
			},
			data: {
				nombre,
				ubicacion,
				superficie
			},
		})
		res.json(reino)
	}catch(error){
		//dice que no existe error
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}

//DELETE
const deleteReino = async (req, res) => {
	try{
		const { id } = req.params
		const reino = await prisma.reinos.delete({
			where: {
				id : Number(id)
			},
		})
		res.json(reino)
	}catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}

const reinosController = {
    createReino,    
    getReinos,
    getReinosById,
    updateReino,
    deleteReino 
}

export default reinosController
