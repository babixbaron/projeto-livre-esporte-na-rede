require('dotenv-safe').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')

const app = express()

mongoose.connect()

app.use(cors())
app.use(express.json())


module.exports = app