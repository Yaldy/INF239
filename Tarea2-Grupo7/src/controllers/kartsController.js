import prisma from '../prismaClient.js'

const getKarts = async (req , res) => {
    const kart = await prisma.karts.findMany()
    res.json(kart)
}

const createKart = async (req, res) => {
    const { modelo, color, velocidad_maxima, id_personaje } = req.body
    const kart = await prisma.karts.create({
        data: {
            modelo, 
            color,
            velocidad_maxima,
            id_personaje
        }
    })
    res.json(kart)
}

const kartsController = {
    getKarts,
    createKart 
}

export default kartsController
