import prisma from '../prismaClient.js'

const getKarts = async (req , res) => {
    const kart = await prisma.karts.findMany()
    res.json(kart)
}

const getKartsById = async (req, res) => {
    const { id } = req.params
    try {
        const kart = await prisma.karts.findUnique({
            where: {
                id: Number(id)
            }
        })
		if (!kart) {
            throw new Error('Kart no existe en la base de datos.');
        }
        res.json(kart)
    } catch (error) {
        console.log('Se produjo un error:', error.message);
        res.json({ message: 'No existe Kart.' })
    }
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

const updateKart = async (req, res) => {
    const { id } = req.params
    const {modelo, color, velocidad_maxima, id_personaje} = req.body
    const kart = await prisma.karts.update({
        where: {
            id : Number(id)
        },
        data: {
            modelo,
            color,
            velocidad_maxima,
            id_personaje
        },
    })
    res.json(kart)
}

const deleteKart = async (req, res) => {
    const { id } = req.params
    const kart = await prisma.karts.delete({
        where: {
            id : Number(id)
        },
    })
    res.json(kart)
}

const kartsController = {
    createKart,     
    getKarts,
    getKartsById,
    updateKart,
    deleteKart
}

export default kartsController
