const express = require('express')
const router = express.Router()
const controller = require('../controller/usuariosController')

router.get('/usuarios', controller.getAll)
router.post('/usuario', controller.create)
router.delete('/usuario/:id', controller.deleteUsuarioById)
router.post('/usuarios/login', controller.login)

module.exports = router