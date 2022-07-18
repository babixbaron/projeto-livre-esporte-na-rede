const ProjetosModel = require('../models/projetosModel')
//const jwt = require('jsonwebtoken')
//const SECRET = process.env.SECRET


const registerNewProject = async (req, res) => {

    try {
        const { nome, contato, local, regiao, vagasDisponiveis, diasDaSemana, modalidades, idades } = req.body
    
        const newProject = new ProjetosModel ({
            nome, contato, local, regiao, vagasDisponiveis, diasDaSemana, modalidades, idades
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

const updateProject = async (req, res) => {
    try {
        const { nome, contato, local, regiao, vagasDisponiveis, diasDaSemana, modalidades, idade } = req.body
        const updatedProject = await ProjetosModel.findByIdAndUpdate(req.params.id, {
            nome, contato, local, regiao, vagasDisponiveis, diasDaSemana, modalidades, idade
        })
        res.status(200).json(updatedProject)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const deleteProject = async (req, res) => {
    try {
        const { id } = req.params
        await ProjetosModel.findByIdAndDelete(req.params.id)
        const message = `Projeto com o id: ${id} removido com sucesso.`
        res.status(200).json({ message })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    registerNewProject,
    findAllProjects,
    findProjectById,
    updateProject,
    deleteProject
}
