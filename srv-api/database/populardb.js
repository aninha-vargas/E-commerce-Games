require('./mongodb');

const clienteModel = require('../models/clienteModel');
const clientes = require('./clientes.json');

const produtoModel = require('../models/produtoModel');
const produtos = require('./produtos.json');

const pedidoModel = require('../models/pedidoModel');
const pedidos = require('./pedidos.json');

function carregarDados(){
  clienteModel.deleteMany({}, () => {
    clientes.forEach(obj => {
      clienteModel.create(obj);
    })
  })

  produtoModel.deleteMany({}, () => {
    produtos.forEach(obj => {
      produtoModel.create(obj);
    })
  })

  pedidoModel.deleteMany({}, () => {
    pedidos.forEach(obj => {
      pedidoModel.create(obj);
    })
  })

}

carregarDados();
setTimeout(process.exit, 3000);