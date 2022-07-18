const express = require('express')
const router = express.Router()
const controller = require('../controller/projetosController')

router.post('/projeto', controller.registerNewProject)
router.get('/projetos', controller.findAllProjects)
router.get('/projeto/:id', controller.findProjectById)
router.get('/projeto/regiao', controller.findProjectByRegiao)
router.get('/projeto/modalidade', controller.findProjectByModalidade)
router.patch('/projeto/atualizar/:id', controller.updateProject)
router.delete('/projeto/remover/:id', controller.deleteProject)

module.exports = router