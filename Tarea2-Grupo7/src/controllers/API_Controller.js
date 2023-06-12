import prisma from '../prismaClient.js'

const top5personajesConMasFuerza = async (req , res) => {
    const cincomas = await prisma.personajes.findMany({
        take:5,
        orderBy: {
            fuerza: 'desc',
        },
    })
    res.json(cincomas)
}
const personajeConMasKarts = async (req , res) => {
    const masKarts = await prisma.karts.groupBy({
        by: ['id_personaje'],
        _count: {
            id : true,    
        },
        orderBy:{    
            _count: {
                id : 'desc',
            },
        },
        take : 1,
    })
//console.log(masKarts[0]._count.id)
//console.log(masKarts[0].id_personaje)

    const personaje = await prisma.personajes.findUnique({
        where:{
            id : masKarts[0].id_personaje,
        }
    })
    res.json([{nombre: personaje.nombre},{karts: masKarts[0]._count.id} ])
}

const cantidadHabitantes = async (req , res) => {
    const { id } = req.params
    const habitantesReino = await prisma.personaje_habita_reino.groupBy({
        by: ['id_reino'],
        where: {
            id_reino: Number(id)
        },
        _count: {
            id_personaje: true,
        },
    })
//console.log(habitantesReino)
    const reino = await prisma.reinos.findUnique({
        where:{
            id : habitantesReino[0].id_reino,
        }
    })
//console.log(reino)
    res.json([{reino: reino.nombre},{habitantes: habitantesReino[0]._count.id_personaje}])
}





const API_Controller = {
    top5personajesConMasFuerza,
    personajeConMasKarts,
    cantidadHabitantes
}

export default API_Controller
