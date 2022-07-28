const express = require('express')
const router = express.Router()
const controller = require('../controller/usuariosController')

router.post('/usuario', controller.create)

module.exports = router