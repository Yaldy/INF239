import prisma from '../prismaClient.js'

//CREATE
const createPersonaje = async (req, res) => {
    const { nombre, fuerza, fecha_nacimiento, objeto } = req.body
	//const fecha = new Date(fecha_nacimiento);
	try{
		if(nombre==null || fuerza==null || fecha_nacimiento==null){
			throw new Error('Falta ingresar al menos un dato.')
		}
		const personaje = await prisma.personajes.create({
			data: {
				nombre, 
				fuerza,
				fecha_nacimiento:  new Date(fecha_nacimiento),
				objeto
			}
		});
		res.json(personaje);
	}
	catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}


//READ
const getPersonajes = async (req , res) => {
	try{
		const personaje = await prisma.personajes.findMany()
		res.json(personaje)
	}
	catch{
		//console.log('Se produjo un error', error.message);
        res.json({ message: 'No existe el personaje.' })
	}
}

//READ BY ID
const getPersonajeById = async (req, res) => {
    const { id } = req.params

    try {
		
        const personaje = await prisma.personajes.findUnique({
            where: {
                id: Number(id)
            }
        })
		if (!personaje) {
            throw new Error('Personaje no existe en la base de datos.');
        }
        
        res.json(personaje)
    } catch (error) {
        console.log('Se produjo un error:', error.message);
        res.json({ message: 'No existe el personaje.' })
    }
}			



//UPDATE
const updatePersonaje = async (req, res) => {
	try{
		const { id } = req.params
		const {nombre, fuerza, fecha_nacimiento, objeto } = req.body
		
		if(nombre==null && fuerza==null && fecha_nacimiento==null && objeto==null){
			throw new Error('No se especifican datos para actualizar');
		}
		
		const fecha = new Date(fecha_nacimiento)
		
		if(isNaN(fecha)){
		//if(nombre!=null &&  fuerza!=null && !isNaN(fecha_nacimiento) && objeto!=null){
			const personaje = await prisma.personajes.update({
				where: {
					id : Number(id)
				},
				data: {
					nombre, 
					fuerza,
					objeto
				},
			})
			res.json(personaje)
		}else{
			const personaje = await prisma.personajes.update({
				where: {
					id : Number(id)
				},
				data: {
					nombre, 
					fuerza,
					fecha_nacimiento: fecha,
					objeto
				},
			})
			res.json(personaje)
		}
	}
	catch(error){
		//dice que no existe error
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}
//DELETE
const deletePersonaje = async (req, res) => {
	try{
		const { id } = req.params
		const personaje = await prisma.personajes.delete({
			where: {
				id : Number(id)
			},
		})
		
		res.json(personaje)
	}
	catch(error){
		console.log('Se produjo un error:', error.message);
		error.message = "Se produjo un error: " + error.message;
        res.status(400).json({ message: error.message})
	}
}

const PersonajesController = {
    createPersonaje,    
    getPersonajes,
    getPersonajeById,
    updatePersonaje,
    deletePersonaje 
}

export default PersonajesController
