const ProjetosModel = require('../models/projetosModel')
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken')


const registerNewProject = async (req, res) => {

    try {

        const authHeader = req.get('authorization')

        if (!authHeader) {
            return res.status(401).send('You need an authorization')
        }

        const token = authHeader.split(' ')[1]
        await jwt.verify(token, SECRET, async function (error) {

        if (error) {
            return res.status(403).send('Access denied')
        }

        const { nome, contato, local, regiao, vagasDisponiveis, diasDaSemana, modalidades, idades } = req.body
    
        const newProject = new ProjetosModel ({
            nome, contato, local, regiao, vagasDisponiveis, diasDaSemana, modalidades, idades
        })
    
        const savedProject = await newProject.save()
    
        res.status(201).json(savedProject)
    })
       
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

const findProjectByRegiao = async (req, res) => {
    try {
        const { regiao } = req.query
        const findProject = await ProjetosModel.find({ regiao: regiao })    

        res.status(200).json(findProject)    

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const findProjectByModalidade = async (req, res) => {
    try {
        const { modalidades } = req.query
        const findProject = await ProjetosModel.find({ modalidades: modalidades })

        res.status(200).json(findProject)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updateProject = async (req, res) => {
    try {
        const { nome, contato, local, regiao, vagasDisponiveis, diasDaSemana, modalidades, idades } = req.body
        const updatedProject = await ProjetosModel.findByIdAndUpdate(req.params.id, {
            nome, contato, local, regiao, vagasDisponiveis, diasDaSemana, modalidades, idades
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
    findProjectByRegiao,
    findProjectByModalidade,
    updateProject,
    deleteProject
}
