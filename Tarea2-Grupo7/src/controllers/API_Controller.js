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
    try{
        const reino = await prisma.reinos.findUnique({
            where:{
                id : habitantesReino[0].id_reino,
            }
        })
    }catch{
        res.json({ message: 'Reino inválido.' })
	}
    res.json([{reino: reino.nombre},{habitantes: habitantesReino[0]._count.id_personaje}])
//console.log(reino)
}

const gobernanteByID = async (req , res) => {
    const { id } = req.params
    try{
    const personajes = await prisma.personaje_habita_reino.findMany({
        where: {
            es_gobernante: true,
            id_reino : Number(id),
        },
        select: {
            id_personaje: true,
        },
    })
    //console.log(personajes)
    if(personajes.length == 0){
        throw new Error('Reino ingresado no es válido.')
    }
    const gobierno = [];
    for(let n of personajes){
        const gobernantes = await prisma.personajes.findUnique({
            where: {
                id: n.id_personaje,
            },
        })
        gobierno.push(gobernantes)
    }
    //console.log(gobierno)
    res.json(gobierno)
    }catch(error){
        res.json({ error: error.message })
    }
}

const gobernante = async (req , res) => {
    const personajes = await prisma.personaje_habita_reino.findMany({
        where: {
            es_gobernante: true,
        },
        select: {
            id_personaje: true,
        },
    })
    //console.log(personajes)
    const gobierno = [];
    for(let n of personajes){
        const gobernantes = await prisma.personajes.findUnique({
            where: {
                id: n.id_personaje,
            },
        })
        gobierno.push(gobernantes)
    }
    //console.log(gobierno)
    //console.log(bb)
    res.json(gobierno)
}

const API_Controller = {
    top5personajesConMasFuerza,
    personajeConMasKarts,
    cantidadHabitantes,
    gobernante,
    gobernanteByID
}

export default API_Controller
