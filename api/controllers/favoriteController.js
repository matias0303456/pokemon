import prisma from "../lib/prismaClient.js";

const favoriteController = {

    getFavorites: async (req, res) => {
        const { user } = req.params
        try {
            const favorites = await prisma.favorite.findMany({
                where: {
                    userId: parseInt(user)
                }
            })
            return res.status(200).send(favorites)
        } catch (err) {
            return res.status(500).send(err)
        } finally {
            prisma.$disconnect()
        }
    },

    saveFavorite: async (req, res) => {
        const { userId, pokemonId } = req.body
        try {
            const favorite = await prisma.favorite.create({
                data: {
                    userId: parseInt(userId),
                    pokemonId: parseInt(pokemonId)
                }
            })
            return res.status(200).send(favorite)
        } catch (err) {
            return res.status(500).send(err)
        } finally {
            prisma.$disconnect()
        }
    },

    deleteFavorite: async (req, res) => {
        const { id } = req.params
        try {
            await prisma.favorite.delete({
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(200).send({ message: 'Registro eliminado.' })
        } catch (err) {
            return res.status(500).send({ message: err })
        } finally {
            prisma.$disconnect()
        }
    }

}

export default favoriteController