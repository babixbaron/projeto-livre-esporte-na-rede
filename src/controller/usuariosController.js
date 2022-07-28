const Usuarios = require('../models/usuariosModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const create = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash
    const usuario = new Usuarios(req.body)

    usuario.save(function(err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }

        res.status(201).send(usuario)
    })
}

const getAll = (req, res) => {
    Usuarios.find(function (err, usuarios) {
        if(err) {
            res.status(500).send({ message: err.message })
        }

        res.status(200).send(usuarios)
    })
}

const deleteUsuarioById = async (req, res) => {
    try {
        const { id } = req.params
        await Usuarios.findByIdAndDelete(id)
        const message = `O usuário com o ${id} foi deletada com sucesso!`
        res.status(200).json({ message })
        
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}


const login = (req, res) => {
    Usuarios.findOne({ email: req.body.email }, function (error, usuario) {
        
        if (!usuario) {
            return res.status(404).send(`Não existe usuário com o email ${req.body.email}`)
        }

        const senhaValida = bcrypt.compareSync(req.body.senha, usuario.senha)

        if (!senhaValida) {

            return res.status(403).send('Senha incorreta')
        }

        const token = jwt.sign({ email: req.body.email }, SECRET)
        return res.status(200).send(token)
    })
}

module.exports = {
    create,
    getAll,
    deleteUsuarioById,
    login
}

