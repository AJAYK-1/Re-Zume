import express, { json } from 'express'
import { config } from 'dotenv'
import helmet from 'helmet'
import DataBaseConnection from './Middlewares/DBConnection.js'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefinitions } from './GraphQL/Schema.js'
import resolvers from './GraphQL/Resolvers.js'
import { Authorization } from './Middlewares/Authorization.js'

const app = express()
config()

app.use(json())
app.use(helmet())
DataBaseConnection()

const server = new ApolloServer({ typeDefs: typeDefinitions, resolvers })

const { url } = startStandaloneServer(server, {
    context: async ({ req }) => {
        const auth = await Authorization(req)
        return auth
    },
    listen: { port: process.env.PORT || 5000 }
})

console.log(`Server running at PORT: ${process.env.PORT}`);