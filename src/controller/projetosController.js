const ProjetosModel = require('../models/projetosModel')
//const jwt = require('jsonwebtoken')
//const SECRET = process.env.SECRET


const registerNewProject = async (req, res) => {

    try {
        const { nome, contato, local, regiao, vagasDisponiveis, diasDaSemana, modalidades} = req.body
    
        const newProject = new ProjetosModel ({
            nome, contato, local, regiao, vagasDisponiveis, diasDaSemana, modalidades
        })
    
        const savedProject = await newProject.save()
    
        res.status(201).json(savedProject)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    registerNewProject
}
