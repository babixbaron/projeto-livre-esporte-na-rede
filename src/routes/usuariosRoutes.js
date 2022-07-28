const express = require('express')
const router = express.Router()
const controller = require('../controller/usuariosController')

router.post('/usuario', controller.create)
router.get('/usuarios', controller.getAll)

module.exports = router