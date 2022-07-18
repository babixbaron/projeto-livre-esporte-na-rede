const express = require('express')
const router = express.Router()
const controller = require('../controller/projetosController')

router.post('/projeto', controller.registerNewProject)
router.get('/projetos', controller.findAllProjects)
router.get('/projetos/:id', controller.findProjectById)

module.exports = router