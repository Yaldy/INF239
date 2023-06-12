import prisma from '../prismaClient.js'
// INCOMPLETO

//CREATE
const createPersonajeHabitaReino = async (req, res) => {
    const { id_trabajo, id_reino, fecha_registro, es_gobernante } = req.body
    const personajeHabitaReino = await prisma.personaje_habita_reino.create({
        data: {
            id_trabajo,
            id_reino,
            fecha_registro: new Date(fecha_registro), 
            es_gobernante: 
        }
    })
    res.json(personajeHabitaReino)
}
//READ
const getPersonajeHabitaReino = async (req , res) => {
    const personajeHabitaReino = await prisma.personaje_habita_reino.findMany()
    res.json(personajeHabitaReino)
}
//UPDATE
const updatePersonajeHabitaReino = async (req, res) => {
    const { id } = req.params
    const {nombre, ubicacion, superficie} = req.body
    const personajeTieneTrabajo = await prisma.personaje_habita_reino.update({
        where: {
            id : Number(id)
        },
        data: {
            id_trabajo,
            id_reino,
            fecha_registro, 
            es_gobernante
        },
    })
    res.json(personajeHabitaReino)
}
//DELETE
const deletePersonajeHabitaReino = async (req, res) => {
    const { id } = req.params
    const personajeHabitaReino = await prisma.personaje_habita_reino.delete({
        where: {
            id : Number(id)
        },
    })
    res.json(personajeHabitaReino)
}

const personajeHabitaReinoController = {
    createPersonajeHabitaReino,    
    getPersonajeHabitaReino,
    updatePersonajeHabitaReino,
    deletePersonajeHabitaReino 
}

export default personajeHabitaReinoController
