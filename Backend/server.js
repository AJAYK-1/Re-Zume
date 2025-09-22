const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.use(express.json())
// app.use('/api')

app.listen(process.env.PORT,
    () => console.log('Server Running at PORT: ', process.env.PORT))