import express from "express";
import favoriteRouter from "./routes/favoriteRouter.js";
import userRouter from './routes/userRouter.js'

const app = express()
const PORT = 8000

app.use(express.json())

app.use(userRouter)
app.use(favoriteRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))