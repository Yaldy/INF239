import prisma from '../prismaClient.js'
//READ
const getPersonajes = async (req , res) => {
    const personaje = await prisma.personajes.findMany()
    res.json(personaje)
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
//CREATE
const createPersonaje = async (req, res) => {
    const { nombre, fuerza, fecha_nacimiento, objeto } = req.body
	//const fecha = new Date(fecha_nacimiento);
	
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
//UPDATE
const updatePersonaje = async (req, res) => {
    const { id } = req.params
    const {nombre, fuerza} = req.body
    const personaje = await prisma.personajes.update({
        where: {
            id : Number(id)
        },
        data: {
            nombre,
            fuerza
        },
    })
    res.json(personaje)
}
//DELETE
const deletePersonaje = async (req, res) => {
    const { id } = req.params
    const personaje = await prisma.personajes.delete({
        where: {
            id : Number(id)
        },
    })
    res.json(personaje)
}

const personajesController = {
    createPersonaje,    
    getPersonajes,
    updatePersonaje,
    deletePersonaje 
}

export default personajesController
