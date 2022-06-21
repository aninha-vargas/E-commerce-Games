const mongoose = require('mongoose');
const produtoSchema = require('./schemas/produtoSchema');
const clienteSchema = require('./schemas/clienteSchema');

const pedidoSchema = new mongoose.Schema({
  id: Number,
  data: { type: Date, default: Date.now },
  itens: [produtoSchema],
  quantidade: Number,
  total: Number,
  cliente: {clienteSchema}
});

module.exports = mongoose.model('pedido', pedidoSchema);