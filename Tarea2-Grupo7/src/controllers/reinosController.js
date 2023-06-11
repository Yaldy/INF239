import prisma from '../prismaClient.js'
//READ
const getReinos = async (req , res) => {
    const reino = await prisma.reinos.findMany()
    res.json(reino)
}

const getReinosById = async (req, res) => {
    const { id } = req.params
    try {
        const reino = await prisma.reinos.findUnique({
            where: {
                id: Number(id)
            }
        })
		if (!reino) {
            throw new Error('Reino no existe en la base de datos.');
        }
        res.json(reino)
    } catch (error) {
        console.log('Se produjo un error:', error.message);
        res.json({ message: 'No existe Reino.' })
    }
}	

//CREATE
const createReino = async (req, res) => {
    const { nombre, ubicacion, superficie } = req.body
    const reino = await prisma.reinos.create({
        data: {
            nombre, 
            ubicacion,
            superficie
        }
    })
    res.json(reino)
}
//UPDATE
const updateReino = async (req, res) => {
    const { id } = req.params
    const {nombre, ubicacion, superficie} = req.body
    const reino = await prisma.reinos.update({
        where: {
            id : Number(id)
        },
        data: {
            nombre,
            ubicacion,
            superficie
        },
    })
    res.json(reino)
}
//DELETE
const deleteReino = async (req, res) => {
    const { id } = req.params
    const reino = await prisma.reinos.delete({
        where: {
            id : Number(id)
        },
    })
    res.json(reino)
}

const reinosController = {
    createReino,    
    getReinos,
    getReinosById,
    updateReino,
    deleteReino 
}

export default reinosController
