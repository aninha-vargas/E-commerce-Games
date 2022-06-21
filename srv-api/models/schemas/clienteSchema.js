const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    sobrenome: String,
    cpf: String,
    fone: String,
    endereco: String,
    cep: String,
    cidade: String,
    estado: String
});

module.exports = clienteSchema;