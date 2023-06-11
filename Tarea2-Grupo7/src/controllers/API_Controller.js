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
console.log(masKarts[0]._count.id)
console.log(masKarts[0].id_personaje)

const personaje = await prisma.personajes.findUnique({
     where:{
        id : masKarts[0].id_personaje,
    }
})
res.json([{nombre: personaje.nombre},{karts: masKarts[0]._count.id} ])
}




const API_Controller = {
    top5personajesConMasFuerza,
    personajeConMasKarts
}

export default API_Controller
