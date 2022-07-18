const ProjetosModel = require('../models/projetosModel')
//const jwt = require('jsonwebtoken')
//const SECRET = process.env.SECRET


const registerNewProject = async (req, res) => {

    try {
        const { nome, contato, local, regiao, vagasDisponiveis, diasDaSemana, modalidades, idade } = req.body
    
        const newProject = new ProjetosModel ({
            nome, contato, local, regiao, vagasDisponiveis, diasDaSemana, modalidades, idade
        })
    
        const savedProject = await newProject.save()
    
        res.status(201).json(savedProject)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findAllProjects = async (req, res) => {
    try {
        const allProjects = await ProjetosModel.find()
        res.status(200).json(allProjects)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findProjectById = async (req, res) => {
    try {
        const findProject = await ProjetosModel.findById(req.params.id)
        res.status(200).json(findProject)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}
 
module.exports = {
    registerNewProject,
    findAllProjects,
    findProjectById
}
