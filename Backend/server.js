import express, { json } from 'express'
import { config } from 'dotenv'
import userRouter from './Routers/userRouter.js'
import helmet from 'helmet'
import DataBaseConnection from './Middlewares/DBConnection.js'
import { buildSchema } from 'graphql'
import { createHandler } from 'graphql-http/lib/use/express'

const app = express()
config()

app.use(json())
app.use(helmet())
DataBaseConnection()

const schema = buildSchema(` 
    type Query {
        hello: String
    }
        `)

const root = {
    hello: () => `Hello World...`,
}

app.use('/graphql', createHandler({
    schema,
    rootValue: root,
}))

app.use('/api/user', userRouter)

app.listen(process.env.PORT || 5000,
    () => console.log('Server Running at PORT: ', process.env.PORT))