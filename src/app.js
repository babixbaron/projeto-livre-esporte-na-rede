require('dotenv-safe').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger/swagger_output.json')
const index = require('./routes/index')
const projetosRoutes = require('./routes/projetosRoutes')
const usuariosRoutes = require('./routes/usuariosRoutes')
const app = express()

mongoose.connect()

app.use(cors())
app.use(express.json())

app.use('/', usuariosRoutes)
app.use('/', index)
app.use('/', projetosRoutes)
app.use('/documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile))


module.exports = app