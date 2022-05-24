import express from 'express'
import userController from '../controllers/userController.js'

const userRouter = express.Router()

userRouter.post('/api/register', userController.register)
userRouter.post('/api/login', userController.login)

export default userRouter