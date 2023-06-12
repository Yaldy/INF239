import prisma from '../prismaClient.js'

//CREATE
const createDefensa = async (req, res) => {
    const { defensa } = req.body
	try{
		if(defensa==null){
			throw new Error('Falta ingresar un dato.')
		}
		const defensas = await prisma.defensas.create({
			data: {
				defensa
			}
		})
		res.json(defensas)
	}catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}

//READ
const getDefensa = async (req, res) => {
	try{
		const defensas = await prisma.defensas.findMany()
		res.json(defensas)
	}catch{
		//console.log('Se produjo un error', error.message);
        res.json({ message: 'No existe la defensa.' })
	}
	
}

//READ BY ID
const getDefensaById = async (req, res) => {
    const { id } = req.params
    try {
        const defensas = await prisma.defensas.findUnique({
            where: {
                id: Number(id)
            }
        })
		if (!defensas) {
            throw new Error('Defensa no existe en la base de datos.');
        }
        res.json(defensas)
    } catch (error) {
        console.log('Se produjo un error:', error.message);
        res.json({ message: 'No existe Defensa.' })
    }

}

//UPDATE
const updateDefensaById = async (req, res) => {
	try{
		const { id } = req.params
		const { defensa } =  req.body
		
		if(defensa==null){
			throw new Error('No se especifican datos para actualizar');
		}
		
		const defensas = await prisma.defensas.update({
		  where: {
			id: Number(id)
		  },
		  data: {
			defensa
		  },
		})
		
		res.json(defensas)
	}catch(error){
		//dice que no existe error
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	
	}
}

//DELETE
const deleteDefensaById = async (req, res) => {
	try{
		const { id } = req.params
		const defensas = await prisma.defensas.delete({
			where: {
				id: Number(id)
			}
		})
		
		res.json(defensas)
	}catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}


const DefensasController = {
   createDefensa,
   getDefensa,
   getDefensaById,
   updateDefensaById,
   deleteDefensaById
}

export default DefensasController
