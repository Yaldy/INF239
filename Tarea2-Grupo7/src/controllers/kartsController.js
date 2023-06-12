import prisma from '../prismaClient.js'
	
//CREATE
const createKart = async (req, res) => {
    const { modelo, color, velocidad_maxima, id_personaje } = req.body
    try{
		if(modelo==null || color==null){
			throw new Error('Falta ingresar al menos un dato.')
		}
		const kart = await prisma.karts.create({
			data: {
				modelo, 
				color,
				velocidad_maxima,
				id_personaje
			}
		})
		res.json(kart)
	}catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}


//READ
const getKarts = async (req , res) => {
	try{
		const kart = await prisma.karts.findMany()
		res.json(kart)
	}catch{
		//console.log('Se produjo un error', error.message);
        res.json({ message: 'No existe el Kart.' })
	}
}

//READ BY ID
const getKartsById = async (req, res) => {
    const { id } = req.params
    try {
        const kart = await prisma.karts.findUnique({
            where: {
                id: Number(id)
            }
        })
		if (!kart) {
            throw new Error('Kart no existe en la base de datos.');
        }
        res.json(kart)
    } catch (error) {
        console.log('Se produjo un error:', error.message);
        res.json({ message: 'No existe Kart.' })
    }
}	
const updateKart = async (req, res) => {
	try{
		const { id } = req.params
		const {modelo, color, velocidad_maxima, id_personaje} = req.body
		
		if(modelo==null && color==null && velocidad_maxima==null && id_personaje==null){
				throw new Error('No se especifican datos para actualizar');
		}
			
		const kart = await prisma.karts.update({
			where: {
				id : Number(id)
			},
			data: {
				modelo,
				color,
				velocidad_maxima,
				id_personaje
			},
		})
		res.json(kart)
	}catch(error){
		//dice que no existe error
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	
	}
}

const deleteKart = async (req, res) => {
	try{
		const { id } = req.params
		const kart = await prisma.karts.delete({
			where: {
				id : Number(id)
			},
		})
		
		res.json(kart)
	}
	catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}

const kartsController = {
    createKart,     
    getKarts,
    getKartsById,
    updateKart,
    deleteKart
}

export default kartsController
