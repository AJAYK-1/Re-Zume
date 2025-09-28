import express, { json } from 'express'
import { config } from 'dotenv'
import userRouter from './Routers/userRouter.js'
import helmet from 'helmet'

const app = express()
config()

app.use(json())
app.use(helmet())

app.use('/api/user', userRouter)

app.listen(process.env.PORT || 5000,
    () => console.log('Server Running at PORT: ', process.env.PORT))