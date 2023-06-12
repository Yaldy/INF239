import prisma from '../prismaClient.js'
// INCOMPLETO

//CREATE
const createDiplomacias = async (req, res) => {
    const { id_reino1, id_reino2, es_aliado } = req.body
    try{
		if(id_reino1==null || id_reino2==null || es_aliado==null){
			throw new Error('Falta ingresar al menos un dato.')
		}
		const diplomacias = await prisma.diplomacias.create({
			data: {
				id_reino1,
				id_reino2,
				es_aliado : Boolean(es_aliado)
			}
		})
		res.json(diplomacias)
	}catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}
//READ
const getDiplomacias = async (req , res) => {
	try{
		const diplomacias = await prisma.diplomacias.findMany()
		res.json(diplomacias)
	}catch{
		//console.log('Se produjo un error', error.message);
        res.json({ message: 'No existe el personaje en ese reino.' })
	}
}

//READ BY ID
const getDiplomaciasByIds = async (req, res) => {
    const { id_r1,id_r2 } = req.params
	try{
		const diplomacias = await prisma.diplomacias.findUnique({
			where:{
				id_reino1_id_reino2:{
					id_reino1:Number(id_r1),
					id_reino2:Number(id_r2),
				},
			},
		})
		if (!diplomacias) {
            throw new Error('Personaje en ese reino no existe en la base de datos.');
        }
		res.json(diplomacias)
	} catch (error) {
        console.log('Se produjo un error:', error.message);
        res.json({ message: 'No existe el personaje en ese reino.' })
    }
}

//UPDATE
const updateDiplomacias = async (req, res) => {
    try{
		const { id_r1,id_r2 } = req.params
		const {es_aliado} = req.body
		
		if(es_aliado==null){
			throw new Error('No se especifican datos para actualizar');
		}
		
		const diplomacias = await prisma.diplomacias.update({
			where:{
				id_reino1_id_reino2:{
					id_reino1:Number(id_r1),
					id_reino2:Number(id_r2),
				},
			},
			data: {
				es_aliado : Boolean(es_aliado)
			},
		})
		res.json(diplomacias)
	}catch(error){
		//dice que no existe error
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}
//DELETE
const deleteDiplomacias = async (req, res) => {
	try{
		const { id_r1,id_r2 } = req.params
		const diplomacias = await prisma.diplomacias.delete({
			where:{
				id_reino1_id_reino2:{
					id_reino1:Number(id_r1),
					id_reino2:Number(id_r2),
				},
			},
		})
		res.json(diplomacias)
	}catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}

const DiplomaciasController = {
    createDiplomacias,    
    getDiplomacias,
	getDiplomaciasByIds,
    updateDiplomacias,
    deleteDiplomacias 
}

export default DiplomaciasController
