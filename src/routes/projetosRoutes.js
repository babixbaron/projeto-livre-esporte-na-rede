const express = require('express')
const router = express.Router()
const controller = require('../controller/projetosController')

router.get('/projetos', controller.findAllProjects)
router.get('/projeto/:id', controller.findProjectById)
router.get('/projeto/regiao', controller.findProjectByRegiao)
router.get('/projeto/modalidade', controller.findProjectByModalidade)
router.post('/projeto', controller.registerNewProject)
router.patch('/projeto/atualizar/:id', controller.updateProject)
router.delete('/projeto/remover/:id', controller.deleteProject)

module.exports = router