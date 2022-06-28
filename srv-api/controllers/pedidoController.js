const pedidoModel = require('../models/pedidoModel');

class PedidoController {
  async salvar(req, res) {
    const max = await pedidoModel.findOne({}).sort({id: -1});
    let pedido = req.body;
    // console.log(req)
    // console.log(pedido)
    pedido.id = max == null ? 1 : max.id + 1;
    // console.log(pedido)
    const resultado = await pedidoModel.create(pedido);
    res.status(201).json(resultado);
  }

  async listar(req, res) {
    const resultado = await pedidoModel.find({});
    res.status(200).json(resultado);
  }

  async buscarPorId(req, res) {
    const id = req.params.pedidoId;
    const resultado = await pedidoModel.findOne({'id': id});
    res.status(200).json(resultado);
  }

  async atualizar(req, res) {
    const id = req.params.pedidoId;
    const _id = String((await pedidoModel.findOne({'id': id}))._id);
    let pedido = req.body;
    await pedidoModel.findByIdAndUpdate(String(_id), pedido);
    res.status(200).send();
  }

  async excluir(req, res) {
    const id = req.params.pedidoId;
    const _id = String((await pedidoModel.findOne({'id': id}))._id);
    await pedidoModel.findByIdAndRemove(String(_id));
    res.status(200).send();
  }
}

module.exports = new PedidoController();