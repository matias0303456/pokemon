import express from 'express'
import favoriteController from '../controllers/favoriteController.js'

const favoriteRouter = express.Router()

favoriteRouter.get('/api/favorites/:user', favoriteController.getFavorites)
favoriteRouter.post('/api/favorites', favoriteController.saveFavorite)
favoriteRouter.delete('/api/favorites/:id', favoriteController.deleteFavorite)

export default favoriteRouter