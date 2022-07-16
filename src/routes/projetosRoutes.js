const express = require('express')
const router = express.Router()
const controller = require('../controller/projetosController')

router.post('/projeto', controller.registerNewProject)

module.exports = router