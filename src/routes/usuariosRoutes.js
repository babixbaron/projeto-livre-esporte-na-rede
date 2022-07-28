const express = require('express')
const router = express.Router()
const controller = require('../controller/usuariosController')

router.post('/usuario', controller.create)
router.get('/usuarios', controller.getAll)
router.delete('/usuario/:id', controller.deleteUsuarioById)

router.post('/usuarios/login', controller.login)

module.exports = router