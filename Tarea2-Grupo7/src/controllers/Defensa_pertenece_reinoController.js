import prisma from '../prismaClient.js'
// INCOMPLETO

//CREATE
const createDefensa_pertenece_reino = async (req, res) => {
    const { id_defensa, id_reino } = req.body
    try{
		if(id_defensa==null || id_reino==null ){
			throw new Error('Falta ingresar al menos un dato.')
		}
		const defensa_pertenece_reino = await prisma.defensa_pertenece_reino.create({
			data: {
				id_defensa,
				id_reino
			}
		})
		res.json(defensa_pertenece_reino)
	}catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}
//READ
const getDefensa_pertenece_reino = async (req , res) => {
	try{
		const defensa_pertenece_reino = await prisma.defensa_pertenece_reino.findMany()
		res.json(defensa_pertenece_reino)
	}catch{
		//console.log('Se produjo un error', error.message);
        res.json({ message: 'No existe la defensa en este reino.' })
	}
}

//READ BY ID
const getDefensa_pertenece_reinoByIds = async (req, res) => {
    const { id_d,id_r} = req.params
	try{
		const defensa_pertenece_reino = await prisma.defensa_pertenece_reino.findUnique({
			where:{
				id_defensa_id_reino:{
					id_defensa:Number(id_d),
					id_reino:Number(id_r),
				},
			},
		})
		if (!defensa_pertenece_reino) {
            throw new Error('Defensa en ese reino no existe en la base de datos.');
        }
		res.json(defensa_pertenece_reino)
	} catch (error) {
        console.log('Se produjo un error:', error.message);
        res.json({ message: 'No existe la defensa en ese reino.' })
    }
}

//UPDATE
//DELETE
const deleteDefensa_pertenece_reino = async (req, res) => {
	try{
		const { id_d,id_r } = req.params
		const defensa_pertenece_reino = await prisma.defensa_pertenece_reino.delete({
			where:{
				id_defensa_id_reino:{
					id_defensa:Number(id_d),
					id_reino:Number(id_r),
				},
			},
		})
		res.json(defensa_pertenece_reino)
	}catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}

const Defensa_pertenece_reinoController = {
    createDefensa_pertenece_reino,    
    getDefensa_pertenece_reino,
	getDefensa_pertenece_reinoByIds,
    deleteDefensa_pertenece_reino 
}

export default Defensa_pertenece_reinoController
