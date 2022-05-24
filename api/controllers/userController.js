import prisma from '../lib/prismaClient.js'

const userController = {

    register: async (req, res) => {
        const { email, nickname, password } = req.body
        if (email === undefined || nickname === undefined || password === undefined) {
            return res.status(400).send({ message: 'Debe enviar todos los datos de usuario.' })
        }
        try {
            await prisma.user.create({
                data: {
                    email,
                    nickname,
                    password
                }
            })
            return res.status(200).send({ message: 'Registro exitoso.' })
        } catch (err) {
            return res.status(500).send({ message: err })
        } finally {
            prisma.$disconnect()
        }

    },

    login: async (req, res) => {
        const { email, password } = req.body
        if (email === undefined || password === undefined) {
            return res.status(400).send({ message: 'Debe enviar todos los datos de usuario.' })
        }
        try {
            const user = await prisma.user.findFirst({
                where: {
                    email,
                    password
                },
                select: {
                    id: true,
                    email: true,
                    nickname: true
                }
            })
            if (user === null) return res.status(404).send({ message: 'El usuario no existe.' })
            return res.status(200).send({ user })
        } catch (err) {
            return res.status(500).send(err)
        } finally {
            prisma.$disconnect()
        }
    }

}

export default userController