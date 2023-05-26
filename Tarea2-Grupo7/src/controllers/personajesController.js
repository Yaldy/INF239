import prisma from '../prismaClient.js'
//READ
const getPersonajes = async (req , res) => {
    const personaje = await prisma.personajes.findMany()
    res.json(personaje)
}
//CREATE
const createPersonaje = async (req, res) => {
    const { nombre, fuerza } = req.body
    const personaje = await prisma.personajes.create({
        data: {
            nombre, 
            fuerza
        }
    })
    res.json(personaje)
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
