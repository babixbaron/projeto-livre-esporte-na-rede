const mongoose = require('mongoose')

const projetosSchema = mongoose.Schema(
    {
        _id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId },
        nome: { type: String, required: true},
        contato: { type: Number, required: true },
        local: { type: String, required: true },
        regiao: { type: String },
        vagasDisponiveis: { type: Boolean },
        diasDaSemana: [{ type: String }],
        modalidades: [{ type: String }],
        idades: { type: String }
    },
    {
        versionKey: false,
    }
)

const projetos = mongoose.model('projetos', projetosSchema)

module.exports = projetos