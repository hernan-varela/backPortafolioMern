require('dotenv').config()
const express = require('express')
const {appConfig} = require('./config')

const app = express()
const port = process.env.APP_PORT
app.listen(appConfig.port, () => console.log(`server uploaded on port ${appConfig.port}`))