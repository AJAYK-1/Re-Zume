const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()

app.use(express.json())

app.listen(process.env.PORT || 5000,
    () => console.log('Server Running at PORT: ', process.env.PORT))