const Usuarios = require('../models/usuariosModel')
const bcrypt = require('bcrypt')

const create = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash
    const usuario = new Usuarios(req.body)

    usuario.save(function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }

        res.status(201).send(usuario)
    })
};

module.exports = {
    create,
}