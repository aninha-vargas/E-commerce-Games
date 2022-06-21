const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  id: Number,
  nome: String,
  desc: String,
  foto: String,
  preco: Number
});

module.exports = produtoSchema;